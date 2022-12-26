import * as React from 'react';
import * as ui from '@mui/material';

const Comment = (props: any) => {
    return (
        <ui.Box sx={{ width: '100%', display: 'flex', mb: 1 }}>
            <ui.CardHeader
                sx={{ bgcolor: 'white' }}
                avatar={
                    <ui.Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </ui.Avatar>
                }
                title={props.username}
                subheader={props.createdAt}
            />
            <ui.CardContent sx={{ bgcolor: 'white' }}>
                <ui.Typography>{props.content}</ui.Typography>
            </ui.CardContent>
        </ui.Box>
    );
}

export default Comment;