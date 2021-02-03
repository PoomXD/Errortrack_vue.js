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
                                class="mr-1"
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
                    userLastName: "Thethong"
                },
                {
                    userId: 2,
                    userName: "Airada",
                    userLastName: "Stong"
                },
                {
                    userId: 3,
                    userName: "Natthawut",
                    userLastName: "Chiphimon"
                }
            ]
        }
    },
    methods: {
        getTextAvatar(id){
            this.users.forEach(user => {
                if(user.userId === id){
                    console.log(`Test filter name: ${user.userName}`)
                }
            });
            return "T";
        }
    }
}
</script>

<style>

</style>