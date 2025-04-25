import React from 'react';
import { Brand } from '../models/Brand';
import './BrandTable.css';

interface BrandTableProps {
  brands: Brand[];
  onEdit: (brand: Brand) => void;
  onDelete: (brand: Brand) => void; // 👈 ici, plus `(id: number)`
}

// Helper function to render stars
const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
        ★
      </span>
    );
  }
  return stars;
};

function BrandTable({ brands, onEdit, onDelete }: BrandTableProps) {
  return (
    <div className="table-container">
      <table className="brand-table">
        <thead>
          <tr>
            <th>Logo</th>
            <th>Name</th>
            <th>Rating</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {brands.map((brand) => (
            <tr key={brand.brand_id}>
              <td>
                <img
                  src={brand.brand_image}
                  alt={brand.brand_name}
                  className="brand-logo"
                />
              </td>
              <td>{brand.brand_name}</td>
              <td>{renderStars(brand.rating)}</td>
              <td>{brand.country_code}</td>
              <td>
                <button className="edit-btn" onClick={() => onEdit(brand)}>Edit</button>
                <button className="delete-btn" onClick={() => onDelete(brand)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BrandTable;
