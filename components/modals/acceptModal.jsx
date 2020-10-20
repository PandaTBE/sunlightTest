import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
    modal: {
        width: '600px',
        height: '318px',
        background: '#ffff',
        borderRadius: '10px',
        '@media (max-width: 767px)': {
            width: '100%',
            height: '100%',
            marginTop: '442px',
        }
    },
    title: {
        textAlign: 'center',
        marginTop: '84px',
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
    }
})

export default function AcceptModal({closeModal, acceptModal}) {
    const classes = useStyles()
    const btnHandler = () => {
        closeModal()
        acceptModal(false)
    }
    return (
        <div className={classes.modal}>
            <div className={classes.title}>Данные успешно сохранены</div>
            <button onClick={btnHandler} className={classes.btn}>Хорошо</button>
        </div>
    )
}