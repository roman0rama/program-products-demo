import { Dropdown, MenuProps, message } from 'antd'
import Search from 'antd/es/input/Search'
import { DownOutlined } from '@ant-design/icons';

const handleButtonClick = () => {
    message.info('Наведіть на ....');
};

const items: MenuProps['items'] = [
    {
        label: 'Microsoft',
        key: '1',
        icon: <DownOutlined />,
    },
    {
        label: 'Avast Software',
        key: '2',
        icon: <DownOutlined />,
    },
    {
        label: 'ESET',
        key: '3',
        icon: <DownOutlined />,
    },
    {
        label: 'AVG',
        key: '4',
        icon: <DownOutlined />,
    },
];

const handleMenuClick: MenuProps['onClick'] = (e) => {
    message.info('Вибрано елемент меню.');
    console.log('click', e);
};

const menuProps = {
    items,
    onClick: handleMenuClick,
};

export const Filter = () => {
    return(
        <div className="filter">
            <Search placeholder="Пошук"></Search>
            <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                Постачальник ПЗ
            </Dropdown.Button>
        </div>
    )
}