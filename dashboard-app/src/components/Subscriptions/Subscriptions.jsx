import { subscriptions } from "../../data/data";
import { iconsImgs } from "../../utils/images";
import "./Subscriptions.css";

function Subscriptions() {
  return (
    <div className="subgrid-two-item grid-common grid-c5">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Subscriptions</h3>
        <button className="grid-c-title-icon">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>

      <div className="grid-c5-content">
        <div className="grid-items">
          {subscriptions.map((subscription) => (
            <div className="grid-item" key={subscription.id}>
              <div className="grid-item-l">
                <div className="icon">
                  <img src={iconsImgs.alert} alt="" />
                </div>
                <div className="text text-silver-v1">
                  {subscription.title} <span>due {subscription.due_date}</span>
                </div>
              </div>

              <div className="grid-item-r">
                <span className="text-silver-v1">${subscription.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Subscriptions;