pipeline {
    agent { docker { image 'node:14-alpine' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
            }
        }
        stage('test') {
          steps {
            sh 'npm run test'
          } 
        }
    }
    post {
      always {
        echo "this always section in a post topic"
      }
      success {
        echo "Success"
      }
      failure {
        echo "Fail"
      }
    }
}


