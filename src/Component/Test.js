import { useEffect, useState } from "react";

const Test = (props) => {
    const [mess, setMess] = useState(false);

    const useEffectDidmount = () => useEffect(() => {
      const { steps } = props;
      const search = steps.search.value;
      if(search === "#1234"){
        setMess(true)
      }
  }, []);

  useEffectDidmount();

    if (mess) {
      return (
        <div className="container col-md-10">
          <h4>Chi tiết đơn hàng</h4>
          <div style={{ display: 'inline-flex' }}>
            <div>
              <img width={80} alt="" src="https://cdn.tgdd.vn/Products/Images/42/213033/iphone-12-pro-max-xanh-duong-new-600x600-600x600.jpg" />
            </div>
            <div>
              <p>Điện thoại iPhone 12 Pro Max 128GB </p>
              <span>30.990.000₫</span>
            </div>
          </div>

        </div>
      )
    }
    else {
      return (
        <div className="container col-md-10">
          <h4>Không tìm thấy đơn hàng</h4>
        </div>
      );
    }
  }

  export default Test ;