import * as React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { Alert, Button, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { MyContext } from './UseContext';

const SimpleContainer = () => {

    const [data, setData] = React.useState({
        firstname: '',
        lastname:'',
        mailid:'',
        password: ''
    });
    const [dataArray, setDataArray] = React.useState([]);
    const [message, setMessage] = React.useState(false);
    const[actualmessage,setActulamessage]=React.useState('');

    React.useEffect(() => {
        const storedData = localStorage.getItem('Array');
        if (storedData) {
            setDataArray(JSON.parse(storedData));
        }
    }, []);

    const handleChange = (e) => {
        setData({
            ...data,
            [e.target.id]: e.target.value.toLowerCase(),
        });
    };


    const validate = () => {
        if (data.firstname === '' ) {
            setMessage(true);
        }
        else if(data.password===''){
            setMessage(true);
        }
        else {
            submitData();
        }
    }

    const submitData = () => {
        const newArray = [...dataArray, data];
        localStorage.setItem('Array', JSON.stringify(newArray));
        setDataArray(newArray);
        setData({ firstname: '', password: '',mailid:'',lastname:'' });
        setActulamessage('Data stored succesfully');
    };

    return (
        <Container maxWidth={'sm'}  style={{  backdropFilter: 'blur(4px)', boxShadow: 'none' }} sx={{marginTop:'2.5%',boxShadow:'0px 0px 10px black',paddingBottom:'2%'}} >
             <Paper elevation={4} sx={{paddingBottom:'5%', textAlign:'center', borderRadius:'5%'}} >
                <h2 style={{padding:'2%',}} >Registration Form</h2>
                <Stack maxWidth={'100%'} alignItems={'center'} spacing={3} direction={{xs:'column',sm:'column'}}>

                <TextField
                    value={data.firstname}
                    color='' 
                    onChange={handleChange}
                    id="firstname"
                    label="Username"
                    variant="standard"
                    required
                />
                 <TextField sx={{
                    marginLeft:'5% '
                }}
                    // backgroundColor='lightgreen'
                    value={data.lastname}
                    color=''
                    onChange={handleChange}
                    id="lastname"
                    label="lastname"
                    variant="standard"
                    required
                    fontWeight={'400'}
                />
                <TextField sx={{
                    marginLeft:'5% '
                }}
                    // backgroundColor='lightgreen'
                    value={data.mailid}
                    color=''
                    onChange={handleChange}
                    id="mailid"
                    label="Mail ID"
                    variant="standard"
                    required
                    fontWeight={'400'}
                />
                
                <TextField
                    value={data.password}
                    color=''
                    onChange={handleChange}
                    id="password"
                    label="Password"
                    variant="standard"
                    required
                    type='password'
                />
                </Stack>
               <br />
                {message && <Alert color='error'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setMessage(false);
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 2 ,m:1}}
                >
                Invalid data
                </Alert>}

                {actualmessage && <Alert color='success'
                    action={
                        <IconButton
                            aria-label="close"
                            color="inherit"
                            size="small"
                            onClick={() => {
                                setActulamessage();
                            }}
                        >
                            <CloseIcon fontSize="inherit" />
                        </IconButton>
                    }
                    sx={{ mb: 1 ,m:1}}
                >
                {actualmessage}
                </Alert>}

                <Button onClick={validate} variant="contained" color="success">
                    register
                </Button>
                
                <Button  variant="contained" color='' sx={{ marginLeft: '5px' }} ><Link to='/loginpage' style={{ textDecoration: 'none', fontWeight: '500' }} >Login</Link></Button>
                </Paper>
        </Container>
    );
};

export default SimpleContainer;
