const api={
    //dappId:"d14afe4b77487172be202e6d2d696012b51bf10c52c5e0903d9209e649d757c0",
    //baseUrl:'http://47.94.230.86:8192',
    dappId:"2ef34add7fc61018835043ac9d4cb6aa1f61e916d6a986ea4c7e5fa4f8810939",
    baseUrl:'http://192.168.1.15:4097',
    //dappId:"63863696d786c0b8d25af17d89c2f02e04376e616baf29a1195685e379954d79",
    //baseUrl:"http://211.149.178.97:80"
}
const dappBaseUrl=api.baseUrl+"/api/dapps/"+api.dappId;
const magic_test="594fe0f3";
const magic_mainnet="5f5b3cf5";
export default {
    baseUrl:api.baseUrl,
    Upload:dappBaseUrl+"/UpLoader",
    loginApi:api.baseUrl+"/api/accounts/open2",
    registerApi:api.baseUrl+"/api/accounts/new",
    tixian:dappBaseUrl+"/transactions/signed",
    areas:dappBaseUrl+"/areas",
    citys:dappBaseUrl+"/citys",
    bind:dappBaseUrl+"/bind",
    logs:dappBaseUrl+"/logs",
    myareas:dappBaseUrl+"/myarea",
    isBind:dappBaseUrl+"/isBind",
    lands:dappBaseUrl+"/lands",
    UiaTrans:api.baseUrl+"/peer/transactions",
    UiaMessage:api.baseUrl+"/api/uia/balances/",
    setNickname:dappBaseUrl+"/transactions/unsigned",
    balances:dappBaseUrl+"/balances/",
    getTransation:dappBaseUrl+"/transactions",
    transfers:dappBaseUrl+"/transfers",
    contracts:dappBaseUrl+"/contracts ",
    getFiles:dappBaseUrl+"/transbyfile",
    getFiles2:dappBaseUrl+"/transbyfile2",
    getFiles3:dappBaseUrl+"/transbyfile3",
    CheckDistinct:dappBaseUrl+"/CheckDistinct",
    //cy:"dreamworld.DDC",
    cy:"Dream.DDC",
    magic:magic_mainnet,


    Map_Area_strokeColor:"red",
    Map_Area_strokeColor_Cover:"blue",
    Map_Area_strokeWeight:2,
    Map_Area_strokeOpacity:0.5,

    Map_Land_strokeColor:"red",
    Map_Land_strokeColor_Cover:"blue",
    Map_Land_strokeWeight:2,
    Map_Land_strokeOpacity:0.2,
    Map_land_Area_strokeColor:"blue",
    Map_land_Area_strokeWeight:2,
    Map_land_Area_strokeOpacity:0.1,
    

}