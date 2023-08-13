declare namespace NodeJS {
    interface Process {
        pkg: { [key: string]: string }; cwd: any
    }
}