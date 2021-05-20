import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import React from 'react'

const SearchBox = (props) => {
    const parameters = [
        { title: 'Capital Gains Rate' },
        { title: 'Corporate Tax Rate' },
        { title: 'Qualified Dividends Rate' },
        { title: 'Top Marginal Rate' },
        { title: 'Passthough Business Income' },
        { title: 'Estate Tax' }
    ];



    const isName = () => {
        const name = props.name;
        if (name === 'Name') {
            return (
                <div>
                    <Autocomplete
                        id="combo-box-demo"
                        options={parameters}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                    />
                </div>
            )
        }
        else {
            return (
                <div>
                    <input />
                </div>
            )
        }
    }

    return (
        <div>
            {isName()}
        </div>
    )
}

export default SearchBox

