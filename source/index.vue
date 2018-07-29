<template>
  <div>
    <el-form>
      <el-input
        :value="bankAccount"
        @keydown.native="keydowmHandle"
        @input="filterBankAccount"></el-input>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Bank',
  data () {
    return {
      bankAccount: ''
    }
  },
  methods: {
    keydowmHandle (e) {
      console.log(e)
      const keyCodes = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57]
      if (!keyCodes.includes(e.keyCode)) e.preventDefault()
    },
    filterBankAccount (value) {
      console.log(value)
      // if ()
      // const last = value.charAt(value.length - 1)
      // if (!/\d/.test(last)) el
      this.bankAccount = value.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
    }
  }
}
</script>
