import React from 'react';
import './style.css';

export default function App() {
  return (
    <div
      class="d-flex flex-column flex-shrink-0 bg-light"
      style={{ width: '4.5rem' }}
    >
      <ul class="nav nav-pills nav-flush flex-column mb-auto text-center">
        <li class="nav-item">
          <a
            href="#"
            class="nav-link active py-3 border-bottom rounded-0"
            aria-current="page"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            aria-label="Home"
            data-bs-original-title="Home"
          >
            <svg
              class="bi pe-none"
              width="24"
              height="24"
              role="img"
              aria-label="Home"
            >
              <use xlink:href="#home"></use>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
}
