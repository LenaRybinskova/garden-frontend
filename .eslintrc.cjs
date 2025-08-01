module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'next/core-web-vitals' // добавляем правила Next.js
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', '.next', 'out'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true },
        ],
        'no-undef': 'off',
        '@typescript-eslint/no-explicit-any': 'warn', // изменяем с error на warn
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/ban-ts-comment': 'warn',
        'react-hooks/exhaustive-deps': 'warn',
    },
}

/*

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        '@it-incubator/eslint-config',
        'next/core-web-vitals' // Добавьте это для Next.js
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': 'warn', // Предупреждение для неиспользуемых переменных
        'no-undef': 'error', // Ошибка для необъявленных переменных
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
};*/
