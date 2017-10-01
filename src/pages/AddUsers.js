import React from "react"
import axios from "axios"
import formProvider from "../utils/FormProvider"

class AddUsers extends React.Component{
    // constructor(){
    //     super()
    //     this.state={
    //         name:{
    //             valid:true,
    //             value:"",
    //             error:""
    //         },
    //         age:{
    //             valid:true,
    //             value:"",
    //             error:""
                
    //         },
    //         gender:{
    //             valid:true,
    //             value:"",
    //             error:""
    //         }
    //     }
    // }

    //表单提交消除默认跳转事件
    handleSubmit(e){
        const {form: {name, age, gender}, formValid,onFormChange} = this.props

        e.preventDefault()


        axios.post("http://localhost:3001/user",{
            name:name.value,
            age:age.value,
            gender:gender.value
        })
        .then((res)=>{
            if(res.data.id){
                alert("add user successfully")
                // this.setState({
                //     name:{
                //         valid:true,
                //         value:"",
                //         error:""
                //     },
                //     age:{
                //         valid:true,
                //         value:"",
                //         error:""
                        
                //     },
                //     gender:{
                //         valid:true,
                //         value:"",
                //         error:""
                //     }
                // })
            }else{
                alert("添加失败")
            }
        })
        .catch((err) => console.error(err));
    }

    //input value 改变，需要更新到this.state
    // handleChange(key,e){
    //     let stateCopy=JSON.parse(JSON.stringify(this.state))
    //     console.log(stateCopy)
    //     stateCopy[key].value=e.target.value

    //      const newField = {value: stateCopy[key].value, valid: true, error: ''};

    //     switch(key){
    //         case "name":{
    //             console.log(stateCopy.name.value.length)
    //             if(stateCopy.name.value.length>=5){
    //                 newField.error="用户名最多四个字符"
    //                 newField.valid=false
    //             }else if(stateCopy.name.value.length===0){
    //                newField.error="请输入用户名"
    //                 newField.valid=false
    //             }
                
    //             break
    //         }

    //         case "age":{
    //             if(stateCopy.age.value > 100 || stateCopy.age.value < 0){
    //                 newField.error="请输入0~100之间的数字"
    //                 newField.valid=false
    //             }

    //             break
    //         }

    //         case "gender":{
    //             if(!stateCopy.gender.value){
    //                 newField.error="请选择性别"
    //                 newField.valid=false
    //             }
    //         }
    //     }




    //     this.setState({
    //         ...this.state,
    //         [key]:newField
    //     })


    // }

    render(){

        const {form: {name, age, gender}, formValid,onFormChange} = this.props;

        return (
      <div>
        <header>
          <h1>添加用户</h1>
        </header>

        <main>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <label>用户名：</label>
                <input type="text" defaultValue={name.defaultValue} onChange={onFormChange.bind(this,"name")}/>
                <span>{this.props.form.name.valid ? "": this.props.form.name.error}</span>
            <br/>
            <label>年龄：</label>
                <input type="number" defaultValue={age.defaultValue} onChange={onFormChange.bind(this,"age")}/>
                <span>{age.valid ? "": age.error}</span>
            <br/>
                <label>性别：</label>
            <select defaultValue={gender.value} onChange={onFormChange.bind(this,"gender")}>
               <option value="">请选择</option>
               <option value="male">男</option>
               <option value="female">女</option>
            </select>
            <span>{gender.valid ? "": gender.error}</span>
            <br/>
            <br/>
            <input type="submit" value="提交"/>
          </form>
        </main>
      </div>
        )
    }
}

AddUsers=formProvider({
    name:{
        defaultValue:"",
        rules:[
            {
                pattern:(value)=>value.length>0,
                error:"请输入用户名"
            },
            {
                pattern: /^.{1,4}$/,
                error:"用户名至少四个字符"
            }
        ]
    },
    age:{
        defaultValue:0,
        rules:[
            {
                pattern:(value)=>value>0 && value<=100,
                error:"请输入0~100间的数字"
            }
        ]
    },

    gender:{
        defaultValue:"",
        rules:[{
            pattern:(value)=>!!value ,
            error:"请选择性别"


        }]
    }
})(AddUsers)

export default AddUsers