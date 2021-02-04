<template>
    <div class="container">
        <b-button v-b-modal.modalPopover>Show Modal</b-button>

        <b-modal id="modalPopover" title="Modal with Popover" size="xl">
            <div class="row px-2">
                <div class="col-xl-8">
                    <div class="row">
                        <div class="col-4 font-gen text-right">
                            Error ID : 
                        </div>
                        <div class="col-8 font-detail text-left">
                            {{ errorDetail.errorId }}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-4 font-gen text-right">
                            Error Detail : 
                        </div>
                        <div class="col-8 font-detail text-left">
                            {{ errorDetail.errorDetail }}
                        </div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-4 font-gen text-right">
                            User Assign : 
                        </div>
                        <div class="col-8 font-detail text-left">
                            
                            <div class="wrap"
                                v-for="(user, index) in errorDetail.userAssignment"
                                :key="`user-${index}`"
                            >
                                <b-avatar
                                class="avatar-owner"
                                    :text="getTextAvatar(user.userAssignId)"
                                >
                                </b-avatar>
                                    <span class="wrap-span" @click="pick(user.userAssignId)">
                                        <font-awesome-icon :icon="['fas', 'times']"/>
                                    </span>
                            </div>
                            

                            <!-- <div
                                v-for="(user, index) in errorDetail.userAssignment"
                                :key="`user-${index}`"
                                class="avatar-with-bt"
                            >
                                <b-avatar
                                    
                                    :text="getTextAvatar(user.userAssignId)"
                                    class="mr-1 avatar-owner mt-1"
                                >
                                    
                                </b-avatar>
                                <span class="del-bt-in-avatar">x</span>
                            </div> -->
                            
                            
                            <b-dropdown
                                right
                                variant="link"
                                toggle-class="text-decoration-none"
                                no-caret
                                class="add-user-bt dropdown-bt"
                                :menu-class="{'prevent-close' : showDropdown == true, 'show-dropdown' : showDropdown == false}"
                                id="dropdown-member"
                                
                                >
                                <template #button-content>
                                    <button class="hide-bt" @click="show()"><font-awesome-icon :icon="['fas', 'plus']"/></button>
                                </template>
                                    <b-dropdown-header href="#">
                                        <div class="row">
                                            <div class="col">
                                                Add User Assign
                                            </div>
                                            <div class="col text-right">
                                                <b-button class="hide-bt" @click="closeDropDown()">
                                                    x
                                                </b-button>
                                            </div>
                                        </div>
                                    </b-dropdown-header>

                                    <b-dropdown-divider></b-dropdown-divider>

                                    <b-dropdown-form>
                                        <b-form-group>
                                            
                                            <b-form-input
                                                v-model="filterText"
                                                id="dropdown-form-member"
                                                placeholder="Search Member"
                                            ></b-form-input>
                                            
                                            <b-dropdown-item disabled>
                                                User Assign
                                            </b-dropdown-item>
                                            <div class="menu-width">
                                                <b-dropdown-item 
                                                href="#" 
                                                @click="pick(userInList.userId)"
                                                v-for="(userInList,i) in filteredUsers"
                                                :key="`userInList-${i}`"
                                            >
                                                <b-avatar size="sm" class="avatar-owner">{{ userInList.text }}</b-avatar>
                                                {{ userInList.userName }}

                                                <div v-if="userInList.selected == true" class="float-right">
                                                    <font-awesome-icon :icon="['fas', 'check']"/>
                                                </div>
                                            </b-dropdown-item>
                                            </div>

                                        </b-form-group>
                                    </b-dropdown-form>

                                </b-dropdown>
                            
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    test
                </div>
            </div>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'modal-task',
    data() {
        return {
            errorDetail: {
                errorId: 123456789,
                errorDetail: "this is detail of xxx error example Some quick example text to build on the card title and make up the bulk of the card's content",
                userAssignment: [
                    {
                        userAssignId: 1
                    },
                    {
                        userAssignId: 2
                    }
                ],
                errorStatusId: 1,
                comment: [
                    {
                        errorId : 123456789,
                        userId : 1,
                        comment : "test comment 1"
                    },
                    {
                        errorId : 123456789,
                        userId : 2,
                        comment : "test comment 2"
                    },
                    {
                        errorId : 123456789,
                        userId : 1,
                        comment : "test comment 3"
                    }
                ]
            },
            users: [
                {
                    userId: 1,
                    userName: "Kamonthip",
                    userLastName: "Thethong",
                    role: "owner"
                },
                {
                    userId: 2,
                    userName: "Airada",
                    userLastName: "Stong",
                    role: "mainten"
                },
                {
                    userId: 3,
                    userName: "Natthawut",
                    userLastName: "Chiphimon",
                    role: "mainten"
                },
                {
                    userId: 4,
                    userName: "User",
                    userLastName: "Test",
                    role: "mainten"
                },
                {
                    userId: 5,
                    userName: "pin",
                    userLastName: "wanyen",
                    role: "mainten"
                },
                {
                    userId: 6,
                    userName: "wanwi",
                    userLastName: "srisopa",
                    role: "owner"
                },
                {
                    userId: 7,
                    userName: "toey",
                    userLastName: "han",
                    role: "mainten"
                },
                {
                    userId: 8,
                    userName: "daniel",
                    userLastName: "kang",
                    role: "mainten"
                },
                {
                    userId: 9,
                    userName: "Aristeaz",
                    userLastName: "Cutie",
                    role: "mainten"
                },
                {
                    userId: 10,
                    userName: "Milky",
                    userLastName: "Way",
                    role: "mainten"
                },
                {
                    userId: 11,
                    userName: "Sirius",
                    userLastName: "Red",
                    role: "mainten"
                },
                {
                    userId: 12,
                    userName: "Azeii",
                    userLastName: "Gei",
                    role: "mainten"
                }
            ],
            pickUsers: [],
            showDropdown: false,
            filterText: ''
        }
    },
    mounted() {
        this.users.forEach(us => {
            let text = ''
            if(us.userName != "" && us.userLastName != ""){
                text = `${us.userName[0]}${us.userLastName[0]}`;
            }else if(us.userName != "" && us.userLastName == ""){
                text = `${us.userName[0]}`;
            }else{
                console.log(`null`)
                text = `Un`
            }
            let addToPick = {
                "userId": us.userId,
                "userName" : `${us.userName} ${us.userLastName}`,
                "text" : text,
                "selected" : false
            }
            this.pickUsers.push(addToPick);
        });

        this.errorDetail.userAssignment.forEach(userAss => {
            this.pickUsers.forEach(pUser => {
                if(userAss.userAssignId == pUser.userId){
                    pUser.selected = true;
                }
            })
        });
    },
    methods: {
        getTextAvatar(id){
            let text = "";
            this.users.forEach(user => {
                if(user.userId === id){
                    if(user.userName != "" && user.userLastName != ""){
                        text = `${user.userName[0]}${user.userLastName[0]}`;
                    }else if(user.userName != "" && user.userLastName == ""){
                        text = `${user.userName[0]}`;
                    }else{
                        console.log(`null`)
                        text = `Un`
                    }
                }
            });
            return text;
        },
        pick(id){
            this.showDropdown = true;
            console.log(`pick id : ${id}`);

            this.pickUsers.forEach(p => {
                if(p.userId === id){
                    if(p.selected === true){
                        p.selected = false;

                        //============== delete user =================
                        let res = this.errorDetail.userAssignment;

                        res = res.filter((data) => data.userAssignId !== id)

                        this.errorDetail.userAssignment = res;
                        console.log(this.errorDetail.userAssignment);
                    }else{
                        p.selected = true;
                        let addUser = {
                            userAssignId: p.userId
                        }
                        this.errorDetail.userAssignment.push(addUser);
                    }
                }
            });
        },
        show(){
            this.showDropdown = true;
            console.log('test');
        },
        closeDropDown(){
            this.showDropdown = false;
            console.log(`${this.showDropdown} : close`);
        }
    },
    computed: {
        filteredUsers() {
        return this.pickUsers.filter((row) => {
            const userName = row.userName.toLowerCase();
            const searchTerm = this.filterText.toLowerCase();

            return (
            userName.includes(searchTerm)
            );
        });
    },
  }
}
</script>

<style>
.menu-width {
    width: 350px;
    max-height: 200px;
    overflow-y: auto;
    margin-top: 5px;
}
.show-dropdown{
    display: none !important;
}
.prevent-close{
    display: block !important;
}
.hide-bt {
    color: #96A1AE;
    background-color: inherit;
    border: none;
    border-radius: 100%;
}

.hide-bt:focus{
    color: #96A1AE;
    background-color: inherit;
    border: none;
    border-radius: 100%;
}
.hide-bt:hover{
    color: #96A1AE;
    background-color: inherit;
    border: none;
    border-radius: 100%;
}
.hide-bt:active{
    color: #96A1AE;
    background-color: inherit;
    border: none;
    border-radius: 100%;
}
.dropdown-bt{
    color: #96A1AE;
    background-color: #E3E3E3;
    border: none;
    border-radius: 100%;
}
.dropdown-bt:hover{
    color: #96A1AE;
    background-color: #E3E3E3;
    border: none;
    border-radius: 100%;
}
.dropdown-bt:focus{
    color: #96A1AE;
    background-color: #E3E3E3;
    border: none;
    border-radius: 100%;
}

</style>