import React, { useState, useEffect } from 'react';
import { Brand } from '../models/Brand';
import './BrandForm.css';

interface BrandFormProps {
  onSubmit: (data: Omit<Brand, 'brand_id'>, id?: number) => void;
  brandToEdit?: Brand | null;
}

function BrandForm({ onSubmit, brandToEdit }: BrandFormProps) {
  const [brandName, setBrandName] = useState('');
  const [brandImage, setBrandImage] = useState('');
  const [rating, setRating] = useState(1);
  const [countryCode, setCountryCode] = useState('FR');

  useEffect(() => {
    if (brandToEdit) {
      setBrandName(brandToEdit.brand_name);
      setBrandImage(brandToEdit.brand_image);
      setRating(brandToEdit.rating);
      setCountryCode(brandToEdit.country_code);
    }
  }, [brandToEdit]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(
      {
        brand_name: brandName,
        brand_image: brandImage,
        rating,
        country_code: countryCode,
      },
      brandToEdit?.brand_id
    );
    resetForm();
  };

  const resetForm = () => {
    setBrandName('');
    setBrandImage('');
    setRating(1);
    setCountryCode('FR');
  };

  return (
    <form onSubmit={handleSubmit} className="brand-form">
      <h2>{brandToEdit ? 'Edit Brand' : 'Add New Brand'}</h2>
      <input
        type="text"
        placeholder="Brand Name"
        value={brandName}
        onChange={(e) => setBrandName(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="Brand Image URL"
        value={brandImage}
        onChange={(e) => setBrandImage(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        min="1"
        max="5"
        onChange={(e) => setRating(parseInt(e.target.value))}
        required
      />
      <input
        type="text"
        placeholder="Country Code (e.g., FR)"
        value={countryCode}
        maxLength={2}
        onChange={(e) => setCountryCode(e.target.value.toUpperCase())}
        required
      />
      <button type="submit">{brandToEdit ? 'Update Brand' : 'Add Brand'}</button>
    </form>
  );
}

export default BrandForm;
