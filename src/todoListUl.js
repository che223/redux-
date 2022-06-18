import {
    Input,
    Button,
    List
} from 'antd'
import "antd/dist/antd.css";
import {
    PLACEHOLDER
} from './common'

export const TodoListUI = props => {
    const {
        listData,
        changeFunc,
        addFunc,
        deleteFunc,
    } = props
    return (
        <div style={{
            margin: '20px'
        }}>
            <div>
                <Input 
                placeholder={listData.inputValue}
                value={listData.inputValue === PLACEHOLDER ? '' : listData.inputValue}
                onChange={changeFunc}
                style={{
                    width: '250px',
                    marginRight: '10px'
                }}/>
                <Button 
                    type='primary'
                    onClick={addFunc}
                >增加</Button>
            </div>
            <div style={{
                margin: '10px',
                marginLeft: 0,
                width: '300px'
            }}>
                <List
                    bordered
                    dataSource={listData.list}
                    renderItem={
                        (item, index) => (
                            <List.Item
                                onClick={() => deleteFunc(index)}
                                >{item}
                            </List.Item>
                            )} 
                />
            </div>
        </div>  
    )
} 