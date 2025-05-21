'use client';

import { useState, useEffect } from 'react';
import { AppBar, Box, Button, Stack, Toolbar, Typography } from '@mui/material';


const sections = [
    { id: 'features', label: 'Features' },
    { id: 'working', label: 'How it Works' },
    { id: 'testimonials', label: 'Testimonials' },
];

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        if(window.location.hash) {
            history.replaceState(null, '', window.location.pathname)
        }
        window.scrollTo(0, 0);
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            let found = '';
            for (const section of sections) {
                const ele = document.getElementById(section.id);
                if (ele) {
                    const rect = ele.getBoundingClientRect();
                    if (rect.top <= 80 && rect.bottom > 80) {
                        found = section.id;
                        break;
                    }
                }
            }
            setActiveSection(found);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AppBar position='sticky' color='inherit' elevation={0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Stack direction='row' spacing={1} alignItems='center'>
                    <Box sx={{
                        width: 40, height: 40, bgcolor: 'primary.main', color: 'white',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontWeight: 700, fontSize: 20
                    }}>ANT</Box>
                    <Typography variant='h6'>Accelerated Nexus of Talent</Typography>
                </Stack>
                <Stack direction='row' spacing={3} alignItems='center'>
                    {sections.map(section => (
                        <Button
                            key={section.id}
                            color={activeSection === section.id ? 'primary' : 'inherit'}
                            onClick={() => {
                                document.getElementById(section.id)?.scrollIntoView();
                            }}
                            sx={activeSection === section.id ? { fontWeight: 700 } : {}}
                        >
                            {section.label}
                        </Button>
                    ))}
                    <Button color="inherit" variant='outlined' sx={{ ml: 2 }}>Log in</Button>
                    <Button color="primary" variant='contained' sx={{ borderRadius: 2 }}>Sign up</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
