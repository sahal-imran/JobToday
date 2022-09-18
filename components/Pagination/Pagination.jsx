import React from 'react';
import { Box } from '@mui/system';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function Pagination() {
    return (
        <>
            <Box sx={{ height: '36px', display: "flex", justifyContent: 'center', alignItems: 'center',my:6 }} >
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, mr: 1, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    <NavigateBeforeIcon sx={{ fontSize: '28px', color: '#0e54ff' }} />
                </Box>
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, mr: 1, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    1
                </Box>
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, mr: 1, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    2
                </Box>
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, mr: 1, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    3
                </Box>
                <Box sx={{ px: 1, height: '100%', display: "flex", justifyContent: 'center', alignItems: 'center', mr: 1 }} >
                    ...
                </Box>
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, mr: 1, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    58
                </Box>
                <Box sx={{ px: 1, height: '100%', border: '1px solid #0e54ff', borderRadius: '4px', display: "flex", justifyContent: 'center', alignItems: 'center', "&:hover": { background: '#e7e8e9' }, cursor: 'pointer', transition: 'all 0.3s ease' }} >
                    <NavigateNextIcon sx={{ fontSize: '28px', color: '#0e54ff' }} />
                </Box>
            </Box>
        </>
    )
}

export default Pagination