import {MongoClient} from "mongodb";
import dotenv from "dotenv"
dotenv.config();

const MONGO_PASS = process.env.MONGO_PASS;
const uri = `mongodb+srv://jjassb404:RE8GBqGxJASIZq1y@cluster0.e5wcm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);

// 데이터베이스 연결 함수
async function connectDB() {
	try {
	  await client.connect();
	  console.log("MongoDB Atlas에 성공적으로 연결되었습니다");
	//   db = client.db("todo");
    console.log("DB연결 성공");
    return client;
	} catch (err) {
	  console.error("MongoDB Atlas 연결 실패", err);
	  console.error("오류 세부 정보:", JSON.stringify(err, null, 2));
	  process.exit(1);
	}
  }

export default connectDB;

//DB 관련된 것들은 이게 일단 다야!


