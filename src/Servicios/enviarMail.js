import React, {useCallback, useState} from 'react';

export default function useMail () {

    const enviaMail = useCallback((item) => {
        const body = JSON.stringify(item);
        alert(body);
        fetch("http://localhost/SentMail.php",{
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: body
        }).then(res => {
            return res.json();
        }).then((res) => {
            if(!res){
               alert(res)
            }else
                alert(res);
        }).catch(e => alert(e));
    })


    return {
        enviaMail
    }
}
