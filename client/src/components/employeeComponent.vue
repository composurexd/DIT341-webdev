<template>
    <b-list-group>
        <b-list-group-item>
            <b-container>
                <b-row>
                    <b-col>
                        {{employee.fname}}
                    </b-col>
                    <b-col>
                        {{employee.lname}}
                    </b-col>
                    <b-col>
                        {{employee.birthday}}
                    </b-col>
                    <b-col>
                        {{employee.userName}}
                    </b-col>
                    <b-col>
                        {{employee.userPass}}
                    </b-col>
                    <b-col>
                        {{employee.trips}}
                    </b-col>
                </b-row>
            </b-container>
        </b-list-group-item>
    </b-list-group>
</template>

<script>
export default {
  name: 'aEmployee',
  props: ['employee'],

  data() {
    return {}
  }
}
</script>

<style scoped>
h1 {
    color: red;
}
</style>
