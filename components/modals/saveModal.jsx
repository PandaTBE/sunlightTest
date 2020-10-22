import { makeStyles } from "@material-ui/core"
import { send } from "../../utils/postRequestFunc"

const useStyles = makeStyles({
    modal: 
        {
            position: 'relative',
            width: '600px',
            height: '318px',
            background: '#ffff',
            borderRadius: '10px',
            '@media (max-width: 767px)': {
                width: '100%',
                height: '100%',
                marginTop: '142px',
            }
        },
    close: {
        position: 'absolute',
        top: '29px',
        right: '29px',
        cursor: 'pointer'

    },
    btn: {
        display: 'block',
        margin: '0 auto',
        width: '202px',
        marginTop: '30px',
        height: '50px',
        border: '1px solid #01BDA7',
        borderRadius: '41px',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#01BDA7'
        }
    },
    title: {
        textAlign: 'center',
        marginTop: '69px',
        fontSize: '24px',
        color: 'rgba(49, 49, 49, 0.7)',
    }
})

export default function SaveModal({closeModal, acceptModal, formValues})  {
    const classes = useStyles()    
    const acceptHandler = () => {
        acceptModal(true)
        if (formValues) {
            for (let key in formValues) {
                localStorage.setItem(key, formValues[key])
            }
            send('/api/server', formValues)
        }
    }
    return (
        <div className={classes.modal}>
            <div className={classes.title}>Сохранить изменения?</div>
            <button onClick={acceptHandler} className={classes.btn}>Сохранить</button>
            <button onClick={closeModal} className={classes.btn}>Не сохранять</button>
            <img onClick={closeModal} className={classes.close} src="/modalClose.svg" alt="modal close"/>
        </div>
    )
}