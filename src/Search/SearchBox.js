import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import React from 'react'

const SearchBox = () => {
    const top100Films = [
        { title: 'Capital Gains Rate' },
        { title: 'Corporate Tax Rate' },
        { title: 'Qualified Dividends Rate' },
        { title: 'Top Marginal Rate' },
        { title: 'Passthough Business Income' },
        { title: 'Estate Tax' }
    ];

    return (
        <div>
            <Autocomplete
                id="combo-box-demo"
                options={top100Films}
                getOptionLabel={(option) => option.title}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />
        </div>
    )
}

export default SearchBox

