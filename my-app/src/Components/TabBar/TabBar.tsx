import React from 'react'

import { Paper, Tabs, Tab } from '@material-ui/core'

export const TabBar: React.FC = () => {
    const handleChange = () => alert('Data not available')
    
    return (
        <Paper>
            <Tabs
                value={0}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="Activity Feed" />
                <Tab label="Stats" />
                <Tab label="Documents" />
            </Tabs>
        </Paper>)
}

export default TabBar