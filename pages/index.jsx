import React from 'react'
import  Head  from "next/head"
import { makeStyles } from '@material-ui/core/styles'
import { useState } from "react"
import ContactsForm from '../components/form'
import Home from '../components/aboutUser'

const useStyles = makeStyles({
    root: {
        position: 'relative',
      minHeight: '470px',
      width: '100%',
      padding: '20px 40px 0 40px',
      
    },
    bgImg: {
        width: '100%',
        position: "absolute",
        height: "470px",
      top: "0",
      left: "0",
      zIndex: "-1"
    }, 
    header: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    userInfo: {
        display: 'flex',
        alignItems: 'center',
    },
    main: {
        marginTop: '24px',
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        
    },
    userImg: {
        flex: '0 0 40px',
        height: '40px',
        borderRadius: '50%',
        marginRight: '20px',
    },
    bell: {
        flex: '0 0 24px',
        height: '29.25px',
        marginRight: '20px',
        paddingRight: '26px',
        borderRight: '1px solid #FFFFFF',
        cursor: 'pointer'
    },
    name: {
        color: '#FFFF',
        fontWeight: '400',
        fontSize: '14px',
        lineHeight: '19px'
    },
    title: {
        color: '#FFF',
        marginTop: '17x',
        textTransform: 'uppercase',
        fontSize: '18px',
        fontWeight: '400'
    },
    subtitle: {
        color: '#FFF',
        fontSize: '14px',
        fontWeight: '400',
        marginTop: '10px'
    },
    card: {
        marginTop: '32px',
        background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        height: '128px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 30px',
    },
    cardWrapper: {
        display: 'flex',
        alignItems: 'center'
    },
    cardImg: {
        flex: '0 0 80px',
        height: '80px',
        borderRadius: '50%',
        marginRight: '40px'
    },
    cardName: {
        fontSize: '30px',
        color: '#FFFF'
    },
    edit: {
        fontSize: '14px',
        textTransform: 'uppercase',
        color: '#ffff',
        lineHeight: '140%',
        paddingRight: '26px',
        background: 'url("/edit.svg") right no-repeat',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
    close: {
        fontSize: '14px',
        textTransform: 'uppercase',
        color: '#ffff',
        lineHeight: '140%',
        paddingRight: '26px',
        background: 'url("/close.svg") right no-repeat',
        textDecoration: 'none',
        cursor: 'pointer',
        '&:hover': {
            textDecoration: 'underline'
        }
    },
  })

export default function MainLayout() {
    const classes = useStyles()
    const [editMode, setEditmode] = useState(false)
    return (
        <div>
            <Head>
                <title>TEST | SUN</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={classes.root}>
                <img className={classes.bgImg} src="/mainBg.png" alt="bg"/>
                <div className={classes.header}>
                    <div className={classes.item}>
                        <img className={classes.bell} src="/bell.svg" alt="bell"/>
                    </div>
                    <div className={classes.item + " " + classes.userInfo}>
                        <div>
                            <img className={classes.userImg} src="/user.svg" alt="user"/>
                        </div>
                        <div className={classes.name}>
                            Иванова А.
                        </div>
                    </div>
                </div>
                <div className={classes.title}>
                ЛИЧНЫЙ ПРОФИЛЬ
                </div>
                <div className={classes.subtitle}>
                Главная/Личный профиль
                </div>
                <div className={classes.card}>
                    <div className={classes.cardWrapper}>
                        <img className={classes.cardImg} src="/user.svg" alt="user"/>
                        <div className={classes.cardName}>Иванова Анна Михайловна</div>
                    </div>
                    {editMode 
                    ? <div onClick={() => setEditmode(false)} className={classes.close}>Закрыть</div> 
                    : <div onClick={() => setEditmode(true)} className={classes.edit}>РЕДАКТИРОВАТЬ</div>}
                </div>
                <main className={classes.main}>
                    {editMode ? <ContactsForm/>: <Home/>}
                </main>
            </div>
            
        </div>
    )
}