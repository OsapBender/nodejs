export const ACTION_AUTH = 'ACTION_AUTH';
export const ACTION_ACTIVE_DAILOG = 'ACTION_ACTIVE_DAILOG';

export const dispatchAuth = () => ({type: ACTION_AUTH})
export const dispatchActiveDialog = (id) => ({type: ACTION_ACTIVE_DAILOG, id});