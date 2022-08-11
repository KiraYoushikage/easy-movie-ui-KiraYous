import {BackTop, Empty, Menu, Tabs} from "antd";
import {SnippetsOutlined, UserOutlined} from "@ant-design/icons";
import PerfectScrollbar from "react-perfect-scrollbar";
import {useNavigate} from "react-router-dom";
import "./OrderHistory.less"
import {useEffect, useState} from "react";
import {getPaidOrdersByUseId} from "../api/order";
import OrderHistoryItem from "../features/orderHistoryItem/OrderHistoryItem";
import moment from "moment";

const menuItems = [
    {
        label: "Personal Information",
        key: "/personal",
        icon: <UserOutlined/>,
    },
    {
        label: "My Order",
        key: "/myOrder",
        icon: <SnippetsOutlined/>,
    },
];
const items = [
    // {
    //     label: "All orders",
    //     key: 1
    // },
    // {
    //     label: "To be payed",
    //     key: 2,
    // },
    {
        label: "To be used",
        key: 3,
    },
    // {
    //     label: "To be evaluated",
    //     key: 4,
    // }
];
const {TabPane} = Tabs;

const OrderHistory = () => {
    const navigate = useNavigate();
    let isEmpty = false;
    const onChange = () => {}
    const [orderDetail, setOrderDetail] = useState([]);
    useEffect(() => {
            const fetchData = async () => {
                const {data} = await getPaidOrdersByUseId(1);
                isEmpty = JSON.stringify(data) === '[]';
                let arr = data.reverse().map((item) => {
                        const {schedule, movie, theater, order} = item;
                    console.log(data)
                        return  {
                            id: order.id,
                            movieName: movie.name,
                            theater: theater.name,
                            number: order.seats.split("1").length - 1,
                            price: order.totalPrice,
                            date: moment(schedule.startTime).format("YYYY-MM-DD HH:mm"),
                            url: movie.imageUrl
                        };
                    }
                )
                setOrderDetail(arr);
            }
            fetchData();
        }, []
    )
    const handleMenuClick = ({key}) => {
        if (key === '/personal') {
            navigate(`/personal`);
        }
    };
    return (
        <PerfectScrollbar id="app-main-scroller-bar">
            <div className="order-history">
                <div className="order-history-box w">
                    <div className="order-history-box-left">
                        <Menu
                            onClick={handleMenuClick}
                            selectedKeys="/myOrder"
                            mode="inline"
                            items={menuItems}
                        />
                    </div>
                    <div className="order-history-box-right">
                        <Tabs centered={true} defaultActiveKey="3" onChange={onChange}>
                            {
                                items.map((item) => (
                                    <TabPane tab={item.label} key={item.key}>
                                        {
                                            orderDetail.map((item) => (
                                                <OrderHistoryItem key={item.id} item={item}/>
                                            ))
                                        }
                                        <div>
                                            {isEmpty ? <Empty/> : ''}
                                        </div>
                                    </TabPane>
                                ))}
                        </Tabs>
                    </div>
                </div>
            </div>
            <BackTop
                className="app-back-to-top"
                target={() => document.getElementById("app-main-scroller-bar")}
            />
        </PerfectScrollbar>
    )
}
export default OrderHistory;