pipeline {
  agent any
  environment {
    CI = "false" // Desactiva que React trate los warnings como errores
    VERCEL_TOKEN = credentials('vercel-token')
  }
  stages {
    stage('Declarative: Checkout SCM') {
      steps {
        checkout scm
      }
    }
    stage('Tool Install') {
      steps {
       tool name: 'Node 20', type: 'nodejs'
      }
    }
    stage('Clean workspace') {
      steps {
        deleteDir()
      }
    }
    stage('Checkout') {
      steps {
        git url: 'https://github.com/ricardoariasm762/node-project.git', branch: 'main'
      }
    }
    stage('Install dependencies') {
      steps {
        bat 'npm install --legacy-peer-deps'
      }
    }
    stage('Run tests') {
      steps {
        bat 'npm test -- --watchAll=false'
      }
    }
    stage('Build app') {
      steps {
        bat 'npm run build'
      }
    }
  }
}
