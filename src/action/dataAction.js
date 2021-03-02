import Axios from 'axios'

export const getData = () => {
    return async (dispatch) => {
        try {
            console.log('getdata kepanggil')

            const res = await Axios.get('https://https://api.jsonbin.io/b/603e131481087a6a8b9456d1/1',
                {})

            console.log(res.data)

            dispatch({
                type: 'GET_DATA',
                payload: res.data
            })
        }
        catch (err) {
            console.log(err)
        }
    }
}