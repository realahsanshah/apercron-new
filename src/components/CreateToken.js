import React from "react";
// import { Stepper } from "react-form-stepper";

import { Steps } from "antd";
import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";

const { Step } = Steps;

const CreateToken = () => {
  return (
    <div className="py-5">
      <Steps current={0} responsive className="my-5 py-5">
        <Step title="Verify Token" />
        <Step
          title="DeFi Launchpad Info"
          description="Enter the launchpad information that you want to raise , that should be enter all details about your presale"
        />
        <Step
          title="Add Additional Info"
          description="Let people know who you are"
        />
        <Step title="Finish" description="Review your information" />
      </Steps>

      <div className="create-token p-5 mt-5">
        <Row>
          <Col xs="12">
            <span className="create-token__light">(*) is required field.</span>
          </Col>
          <Col md="6" className="mt-2">
            <span className="create-token__heading">Token Address*</span>
          </Col>
          <Col
            md="6"
            className="d-flex justify-content-start justify-content-md-end align-items-center mt-2"
          >
            <Button className="custome-btn">Create Token</Button>
          </Col>
          <Col xs="12" className="mt-3">
            <Input placeholder="Ex. PinkMoon"></Input>
          </Col>
          <Col xs="12" className="mt-3">
            <span className="create-token__sub">Pool Creation free: 1 BNB</span>
          </Col>

          <Col xs="12" className="mt-3">
            <Label className="create-token__label">Currency</Label>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" />
                <span>BNB</span>
              </Label>
            </FormGroup>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" /> <span>BUSD</span>
              </Label>
            </FormGroup>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" /> <span>USDT</span>
              </Label>
            </FormGroup>
            <FormGroup check className="mb-3 mt-1">
              <Label check>
                <Input type="radio" name="radio1" /> <span>USDC</span>
              </Label>
            </FormGroup>

            <span className="create-token__sub-label">
              Users will pay with BNB for your token
            </span>
          </Col>

          <Col xs="12" className="mt-3">
            <Label className="create-token__label">Free options</Label>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" />
                <span>5% BNB raised only</span>
              </Label>
            </FormGroup>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" />{" "}
                <span>2% BNB raised + 2% token sold</span>
              </Label>
            </FormGroup>
          </Col>

          <Col xs="12" className="mt-3">
            <Label className="create-token__label">Free options</Label>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" />
                <span>Auto Listening</span>
              </Label>
            </FormGroup>
            <FormGroup check className="mt-1">
              <Label check>
                <Input type="radio" name="radio1" />{" "}
                <span>Manual Listening</span>
              </Label>
            </FormGroup>
          </Col>

          <Col
            xs="12"
            className=" mt-3 create-token__bottom d-flex justify-content-center align-items-center p-3 p-md-5 my-5"
          >
            <span>
              For auto listing, after you finalize the pool your token will be
              auto listed on DEX.
            </span>
          </Col>

          <Col
            xs="12"
            className=" d-flex justify-content-center align-items-center p-3 mb-5"
          >
            <Button className="create-token__next-btn">Next</Button>
          </Col>
        </Row>
      </div>

      <Row>
        <Col
          xs="12"
          className="d-flex justify-content-center align-items-center mt-5 py-5"
        >
          <span className="disclaimer">
            Disclaimer: The information provided shall not in any way constitute
            a recommendation as to whether you should invest in any product
            discussed. We accept no liability for any loss occasioned to any
            person acting or refraining from action as a result of any material
            provided or published.
          </span>
        </Col>
      </Row>
      {/* <Stepper
        steps={[{ label: "Step 1" }, { label: "Step 2" }, { label: "Step 3" }]}
        activeStep={2}
      /> */}

      {/* <div class="wrapper">
        <ol class="c-stepper">
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 1</h3>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 2</h3>
          </li>
          <li class="c-stepper__item">
            <h3 class="c-stepper__title">Step 3</h3>
          </li>
        </ol>
      </div> */}
    </div>
  );
};

export default CreateToken;
