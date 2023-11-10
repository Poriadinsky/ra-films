import { Component } from "react";
import items from "./items.json";

export class Star extends Component {
  constructor() {
    super();
    this.items = items;
  }

  getStars(count) {
    let stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(
        <li key={i}>
          <svg
            fill="#D3BCA2"
            height="28"
            viewBox="0 0 18 18"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
          </svg>
        </li>
      );
    }

    return stars;
  }

  render() {
    return (
      <>
        {items
          .filter((el) => el.count < 6 && el.count > 0)
          .map((el) => (
            <ul key={el.id} className="card-body-stars u-clearfix">
              {this.getStars(el.count)}
            </ul>
          ))}
      </>
    );
  }
}
