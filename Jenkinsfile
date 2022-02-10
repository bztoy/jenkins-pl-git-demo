pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building'
                sh 'npm install'
                sh 'npx tsc'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying'
            }
        }
    }
}
