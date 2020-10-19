import { makeStyles, TextField } from "@material-ui/core"
import { Formik } from "formik"
import * as yup from 'yup'

const useStyles = makeStyles({
    wrapper: {
        height: '245px',
        background: '#ffff',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        padding: '26px 70px 44px 0'
    },
    inputsWrapper: {
        display: 'flex',
        justifyContent: 'center'
    },
    input: {
        width: '254px',
        height: '57px',
    },
    item: {
        height: '97px',
        borderRight: '1px solid #CAE7FE',
        paddingRight: '77px',
        paddingLeft: '33px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '&:last-child': {
            borderRight: 'none',
            paddingRight: '0'
        }
    },
    img: {
        flex: '0 0 30px',
        height: '30px',
        marginRight: '46px'
    },
    button: {
        display: 'block',
        margin: '0 auto',
        marginTop: '29px',
        width: '212px',
        height: '49px',
        color: '#ffff',
        background: '#01BDA7',
        borderRadius: '36px',
        outline: 'none',
        border: 'none',
        '&:hover': {
            background: '#009685'
        }
    }
})

export default function ContactsForm () {
    const classes = useStyles()
    const validationSchema = yup.object().shape({
        name: yup.string().required('Это обязательное поле'),
        email: yup.string().email('Введите верный email').required('Это обязательное поле'),
        phone: yup.number().typeError('Введите верный телефон').required('Это обязательное поле'),
    })
    return (
        <div>
            <Formik initialValues={
                {
                    name: '',
                    email: '',
                    phone: '',
                }
            }
            validateOnBlur
            onSubmit={(values, {resetForm}) => {
                console.log(values)
                resetForm({values: ''})
            }}
            validationSchema={validationSchema}>
                
                {
                    ({values, errors, touched, handleChange, handleBlur, isValid, handleSubmit}) => (
                        <div className={classes.wrapper}>
                            <div className={classes.inputsWrapper}>
                                <div className={classes.item}>
                                    <img className={classes.img} src="/userForm.svg" alt="user"/>
                                    {
                                        touched.name && errors.name 
                                        ?
                                            <TextField
                                                error
                                                className={classes.input}
                                                name='name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                                label="Фамилия и имя"
                                                variant="outlined"
                                                helperText={errors.name}
                                            /> 
                                        :  <TextField 
                                                className={classes.input}
                                                label="Фамилия и имя" 
                                                variant="outlined"
                                                name='name'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name} />

                                    }
                                </div>
                                <div className={classes.item}>
                                    <img className={classes.img} src="/mail.svg" alt="mail"/>
                                    {
                                        touched.email && errors.email 
                                        ?
                                            <TextField
                                                error
                                                name='email'
                                                className={classes.input}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                                label="E-mail"
                                                variant="outlined"
                                                helperText={errors.email}
                                            /> 
                                        :  <TextField 
                                                label="E-mail" 
                                                className={classes.input}
                                                variant="outlined"
                                                name='email'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email} />

                                    }
                                </div>
                                <div className={classes.item}>
                                    <img className={classes.img} src="/phone.svg" alt="phone"/>
                                    {
                                        touched.phone && errors.phone 
                                        ?
                                            <TextField
                                                error
                                                name='phone'
                                                className={classes.input}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone}
                                                label="Номер телефона"
                                                variant="outlined"
                                                helperText={errors.phone}
                                            /> 
                                        :  <TextField 
                                                label="Номер телефона" 
                                                className={classes.input}
                                                variant="outlined"
                                                name='phone'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.phone} />

                                    }
                                </div>
                            </div>
                                
                            
                            <button 
                                className={classes.button}
                                disabled={!isValid} 
                                onClick={handleSubmit} 
                                type='submit'>
                                    Сохранить изменения
                            </button>
                        </div>
                    )
                }

            </Formik>
        </div>
    )
}