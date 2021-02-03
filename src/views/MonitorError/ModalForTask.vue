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
                            User Assing : 
                        </div>
                        <div class="col-8 font-detail text-left">
                            <b-avatar
                                v-for="(user, index) in errorDetail.userAssignment"
                                :key="`user-${index}`"
                                :text="getTextAvatar(user.userAssignId)"
                                class="mr-1 avatar-owner"
                            >
                            </b-avatar>
                            <b-avatar
                                text="+"
                                class="mr-1 avartar-more"
                                @click="pick()"
                            >
                            </b-avatar>
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
                    userName: "User",
                    userLastName: "Test",
                    role: "mainten"
                }
            ],
            pickUser: []
        }
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
        pick(){
            
        }
    }
}
</script>

<style>

</style>