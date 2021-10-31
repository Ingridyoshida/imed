import React, { useState, useEffect } from 'react';
import { RefreshControl } from 'react-native';
import { Container,
         Scroller,
         ListArea,
         EmptyWarning
} from './styles';

import ApoointmentItem from '../../components/ApoointmentItem';
import Api from '../../Api';


export default () => {

    
    const [loading, setLoading] = useState(false);
    const [list, setList] = useState([]);

    useEffect(() =>{
        getApoointments();
    }, []);

    const getApoointments = async () => {
        setLoading(true);
        setList([]);

            let res = await Api.getApoointments();
            if(res.error == '') {
                setList(res.list);
            } else {
                alert("Erro "+res.error);
            }

        setLoading(false);
    }

    

    return (
        <Container>

            <Scroller refreshControl={
                <RefreshControl refreshing={loading} onRefresh={getApoointments} />
            }>
                 {!loading && list.length === 0 && 
                    <EmptyWarning>Não há agendamentos.</EmptyWarning>
                 }            

                <ListArea>
                    {list.map((item, k) => (
                        <ApoointmentItem key={k} data={item} />
                    ))}
                </ListArea>
            </Scroller>
        </Container>
    )
}