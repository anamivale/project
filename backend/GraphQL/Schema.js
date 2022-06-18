const { GraphQLSchema, GraphQLObjectType } = require("graphql")
const { SchoolQuery, AddSchoolMutation } = require("./Resolvers/SchoolResolver")
const {
  LoginQuery,
  CreateUser,
  LoggedInUser,
} = require("./Resolvers/UserResolver")
const {
  AddStudentMutation,
  AllStudents,
  StudentLogin,
  LoggedStudent,
  MyInfo,
  DeleteStudentMutation,
} = require("./Resolvers/StudentResolver")
const {
  AddCandidate,
  ViewCandidates,
  SchoolCandidates,
} = require("./Resolvers/CandidateResolver")
const { CastVote, Winners, meVoted } = require("./Resolvers/VotesResolver")
const { LoggedIn } = require("./Resolvers/LoggedIn")

const RootQuery = new GraphQLObjectType({
  name: "RootQuery",
  fields: {
    login: LoginQuery,
    loggedInUser: LoggedInUser,
    schools: SchoolQuery,
    students: AllStudents,
    candidates: ViewCandidates,
    schoolCandidates: SchoolCandidates,
    studentLogin: StudentLogin,
    loggedInStudent: LoggedStudent,
    loggedIn: LoggedIn,
    winners: Winners,
    myInfo: MyInfo,
    meVoted: meVoted,
  },
})

const RootMutation = new GraphQLObjectType({
  name: "RootMutation",
  fields: {
    createUser: CreateUser,
    addSchool: AddSchoolMutation,
    addStudent: AddStudentMutation,
    addCandidate: AddCandidate,
    castVote: CastVote,
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
})
