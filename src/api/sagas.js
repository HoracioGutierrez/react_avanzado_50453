import {all} from "redux-saga/effects"


function* watcherSaga(){}

function* rootSaga() {
    yield all([watcherSaga()])
}

export default rootSaga