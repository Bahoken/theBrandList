import React, { useEffect, useState } from "react";
import { Brand } from "../models/Brand";
import {
  getBrands,
  createBrand,
  updateBrand,
  deleteBrand,
} from "../api/brandsApi";
import BrandTable from "../components/BrandTable";
import BrandForm from "../components/BrandForm";
import Modal from "../components/Modal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";
import "./BrandPage.css";

const countries = ["FR", "US", "DE", "IT", "CA"];

function BrandPage() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [brandBeingEdited, setBrandBeingEdited] = useState<Brand | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string>("FR");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState<boolean>(false);
  const [brandToDelete, setBrandToDelete] = useState<Brand | null>(null);

  const fetchBrands = async (country: string = "FR") => {
    try {
      const data = await getBrands(country);
      setBrands(data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateClick = () => {
    setBrandBeingEdited(null);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    if (brandToDelete) {
      try {
        await deleteBrand(brandToDelete.brand_id);
        await fetchBrands(selectedCountry);
      } catch (error) {
        console.error("Error deleting brand:", error);
      } finally {
        setIsDeleteModalOpen(false);
        setBrandToDelete(null);
      }
    }
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setBrandToDelete(null);
  };

  const handleDeleteClick = (brand: Brand) => {
    setBrandToDelete(brand);
    setIsDeleteModalOpen(true);
  };

  const handleCreateOrUpdate = async (
    brandData: Omit<Brand, "brand_id">,
    id?: number
  ) => {
    try {
      if (id) {
        await updateBrand(id, brandData);
      } else {
        await createBrand(brandData);
      }
      await fetchBrands(selectedCountry);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error saving brand:", error);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Are you sure you want to delete this brand?")) return;
    try {
      await deleteBrand(id);
      await fetchBrands(selectedCountry);
    } catch (error) {
      console.error("Error deleting brand:", error);
    }
  };

  const handleEdit = (brand: Brand) => {
    setBrandBeingEdited(brand);
    setIsModalOpen(true);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const country = e.target.value;
    setSelectedCountry(country);
    fetchBrands(country);
  };

  useEffect(() => {
    fetchBrands(selectedCountry);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div className="brand-page">
      <h1>Toplist Brands</h1>

      <div className="actions-container">
        <button className="create-btn" onClick={handleCreateClick}>
          + Create Brand
        </button>

        <div className="filter-container">
          <label htmlFor="country-select">Filter by Country : </label>
          <select
            id="country-select"
            value={selectedCountry}
            onChange={handleCountryChange}
          >
            {countries.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
      </div>

      <BrandTable
        brands={brands}
        onEdit={handleEdit}
        onDelete={handleDeleteClick}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BrandForm
          onSubmit={handleCreateOrUpdate}
          brandToEdit={brandBeingEdited}
        />
      </Modal>

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        brandName={brandToDelete?.brand_name || ""}
        onConfirm={confirmDelete}
        onCancel={cancelDelete}
      />
    </div>
  );
}

export default BrandPage;
