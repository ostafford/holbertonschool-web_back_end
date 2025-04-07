export default [
    {
      files: ["**/*.js"],
      languageOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
      },
      rules: {
        // Basic rules that would be common across your projects
        "no-unused-vars": "error",
        "semi": ["error", "always"],
        "indent": ["error", 2]
      }
    }
  ];