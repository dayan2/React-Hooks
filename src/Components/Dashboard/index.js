import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import MainLayout from "../MainLayout"
import * as action from "./actions"
import * as axios from "axios"
import { Table, Tag, Space } from 'antd'

const Dashboard = () => {
    const props = useSelector(state => state.dashboard)
    const dispatch = useDispatch()

    const fetchList = async () => {
        dispatch(action.fetchListRequest)
        try {
            const res = await axios('http://localhost:3000/getList')
            dispatch(action.fetchListSuccess(res.data))
        } catch (error) {
            dispatch(action.fetchListFail(error))
        }
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: 'Tags',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Invite {record.name}</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];


    useEffect(() => {
        fetchList()
    }, []);

    return (
        <MainLayout>
            <Table columns={columns} dataSource={props.list} />
        </MainLayout>
    );
}

export default Dashboard
