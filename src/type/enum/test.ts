export enum UserSportsEnum { // enum 主要針對值的型別
    football = 'football',
    basketball = 'basketball',
    tennis = 'tennis',
    badminton = 'badminton',
    tableTennis = 'tableTennis',
    volleyball = 'volleyball',
}

// const userInformation = {
//     name: 'John',
//     age: 18,
//     sports: UserSportsEnum.football,
// };




//--------------------------------------------------------------

// const getRecordData = async (sport:UserSportsEnum,page?: number) => {
//     const params = {
//         franchiseeId: store.user?.franchisee.id,
//         sports: sport,
//         perPage: 10,
//         page: page ? page : 1,
//     };
//     const [err, result] = await asyncDo(
//         $http<{ data: GetRecordData }>('get', '/logger/login-group', params),
//     );
//     if (!isResponseOK(err, result)) {
//         return null;
//     }
//     return result;
// };


// const getRecordData = async (sport:UserSportsEnum,page: number) => {
//     const { data } = await store.getRecordData(UserSportsEnum.badminton,page)
//     recordData.value = data as GetRecordData
// }