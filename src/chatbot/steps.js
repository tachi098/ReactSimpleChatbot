import Test from "./../Component/Test"
import GoogleMap from "./../common/GoogleMap"

export const steps = [
    {
      id: 'name',
      message: `Chào User, bạn cần giúp đở gì...`,
      trigger: 'ask',
    },
    {
      id: 'ask',
      options: [
        { value: 'y', label: 'Địa chỉ cửa hàng', trigger: 'address' },
        { value: 'n', label: 'Chi tiết đơn hàng', trigger: 'q_detail' }
      ]
    },
    {
      id: 'q_detail',
      message: 'Nhập mã đơn hàng...',
      trigger: 'search',
    },
    {
      id: 'search',
      user: true,
      trigger: 'detail',
    },
    {
      id: 'detail',
      component: <Test />,
      trigger: 'name',
    },
    {
      id: 'address',
      component: <GoogleMap/>,
      trigger: 'name',
    }
  ]