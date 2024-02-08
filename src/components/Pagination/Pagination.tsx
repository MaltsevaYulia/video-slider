import { ISlide } from '@/app/page';
import React from 'react'

interface IProps {
  videos: ISlide[];
  currentSlide?: ISlide;
  setSelectedSlideId: (id: string) => void;
}

const Pagination:React.FC<IProps> = ({ videos, currentSlide, setSelectedSlideId }) => {
  return (
    <ul className="pagination-list">
      {videos.map((item) => (
        <li key={item.id} className="pagination-item">
          <button
            type="button"
            className={`pagination-button ${
              item.id === currentSlide?.id ? "active" : ""
            }`}
            onClick={() => {
              setSelectedSlideId(item.id);
            }}
          ></button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination