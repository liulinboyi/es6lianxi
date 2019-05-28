// npm init  //初始化操作
// npm i scanf  //安装scanf输入插件
// npm i mysql2  //连接数据库驱动2
// npm i sequelize  //简化数据库操作,可以使数据库操作与数组操作类似
// node es6_mysql
const scanf=require('scanf');
const Sequelize=require('sequelize');


//需要使用数据库的准备工作代码
// 1、创建sequelize 对象，通过sequelize对象操作数据库
const seq=new Sequelize('es6','root','123456',{dialect:'mysql'});// new的对象首字母大写
//数据库名，用户名，密码，方言（指定数据库类型）

//2、定义数据库中的数据格式，数据名字和数据类型
//sequelize.INTEGER===整数
//point:定义数据模型
const Point=seq.define('point',{//定义数据模型，point数据库表名称，再数据库生成时会自动加s
    x:Sequelize.INTEGER,
    y:Sequelize.INTEGER,
},{
    //如果设置此字段，数据库中表名不会增加s,数据表名则与此处设置的数据模型point一致
    freezeTableName:true,
});

// 3、同步数据库
seq.sync();

console.log('欢迎进入坐标管理系统');//启动logo

async function main(){ //对函数内代码进行封装
    while(1){
            console.log('1---添加一个坐标');
            console.log('2---显示全部坐标');
            console.log('3---通过id删除指定坐标');
            console.log('4---退出');
            let con=scanf('%d');  //输入一个数字
            if(con===1){
                console.log('1---添加一个坐标');
                console.log('请输入横坐标：');
                let x=scanf('%d');
                console.log('请输入纵坐标：');
                let y=scanf('%d');
                let zuobiao={
                    'x':x,
                    'y':y
                };
                // arr.push(zuobiao);  //往数组中添加一个数字

                //向数据库中保存数据
                await Point.create(zuobiao);

                console.log('添加坐标成功');
                scanf('%d');
            }
            if(con===2){
                console.log('2---显示全部坐标');
                //findALL获取书库中所有数据
                let arr=await Point.findAll();

                for(let i=0;i<arr.length;i++){
                    let syk=arr[i];
                    // console.log(syk);
                    console.log(`坐标id:${syk.id}坐标为(${syk.x},${syk.y})`);
                }
                console.log('点击回车继续');
                scanf('%d');
            }
            if(con===3){
                console.log('3---通过id删除指定坐标');
                let id=scanf('%d');
                // arr.pop();  //删除数组中最后一个数字
                await Point.destroy({
                    where:{
                        'id':id
                    }
                });
                console.log('删除坐标成功');
                scanf('%d');
            }
            if(con===4){
                console.log('退出');
                break;
            }
        }
}
main(); //执行main()函数