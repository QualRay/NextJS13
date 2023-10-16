import React from "react";

export default function LeftAside() {
  return (
    <aside className="column a">
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Drink
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Food
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Snacks
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Coffee
          </a>
        </li>
      </ul>
    </aside>
  );
}
