import { Steps, Card, Button, BackTop } from "antd";
import "./PrepareOrderPage.less";
import PrepareOrderDetail from "../features/prepareOrderDetail/PrepareOrderDetail";
import { useNavigate, useParams } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";

const { Step } = Steps;

const PrepareOrderPage = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const goToAfterPayPage = () => {
    navigate(`/afterPay/${orderId}`);
  };

  return (
    <PerfectScrollbar id="app-main-scroller-bar">
      <div className="prepare-order-page">
        <Card>
          <div className="prepare-order-page-header">
            <Steps current={2}>
              <Step title="Select schedule" />
              <Step title="Select seat" />
              <Step title="Pay in 15 minutes" />
              <Step title="Take your ticket" />
            </Steps>
          </div>
          <div className="prepare-order-page-content">
            <PrepareOrderDetail />
          </div>
          <div className="prepare-order-page-remain-points">
            Remaining points : <span>10000.00</span>
          </div>
          <div className="prepare-order-page-payment">
            <div className="prepare-order-page-payment-price">
              total:
              <span className="prepare-order-page-payment-price-yen">
                &yen; 55
              </span>
            </div>
            <Button type="primary" onClick={goToAfterPayPage}>
              Pay
            </Button>
          </div>
          <div className="prepare-order-page-help">
            Encounter payment difficulties?
          </div>
        </Card>
      </div>
      <BackTop
        className="app-back-to-top"
        target={() => document.getElementById("app-main-scroller-bar")}
      />
    </PerfectScrollbar>
  );
};

export default PrepareOrderPage;