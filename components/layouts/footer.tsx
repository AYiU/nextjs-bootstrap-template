import { Row, Col } from "reactstrap";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Row style={{ width: "100%" }}>
        <Col xs="12" md="6">
          <ul>
            <li>
              <Link href="/">
                <a>和諧粉彩</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>我的作品</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>學生作品</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>找我畫畫</a>
              </Link>
            </li>
          </ul>
        </Col>
        <Col xs="12" md="6" className="use-flexbox">
          <div>
            <a
              href="https://ayiu.net/"
              target="_blank"
              rel="noopener noreferrer"
            >
              © AYiU.NET 2021
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
}
