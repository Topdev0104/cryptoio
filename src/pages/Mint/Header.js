import React, { useState } from "react";
// @import Page
import CreateModal from "./Create";
// import MintModal from "./Mint";
// @import Component
import { Col, Row } from "../../components/Layout";
import { Text } from "../../components/Text";
import { CustomInput } from "../../components/Input";
import { Radio, RadioGroup } from "@mui/material";
import { SwitchButton } from "../../components/Switch";

import { StyledHeader, CustomArea, CustomButton } from "../../style/Mint/style";
import "react-toastify/dist/ReactToastify.css";

import { AiTwotoneSetting, AiOutlineDownCircle } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { BiMinus } from "react-icons/bi";
const Header = () => {
  const [creModal, setCreModal] = useState(false);
  // const [mintModal, setMintModal] = useState(false);
  const [singleNFT, setSingleNFT] = useState(false);
  const [singleFile, setSingleFile] = useState(false);
  const [collection, setCollection] = useState("");
  const [description, setDescription] = useState("");
  const [mintValue, setMintValue] = useState([
    {
      num: 1,
      name: "",
      description: "",
      value: "",
      other: "",
      flag: true,
      clickable: false,
      store: "ipfs",
    },
  ]);
  const onChangePlusMint = (num) => {
    const data = mintValue.map((item) => {
      if (item.num === num) {
        item.flag = !item.flag;
      }
      return item;
    });
    data.push({
      num: num + 1,
      name: "",
      description: "",
      value: "",
      other: "",
      flag: true,
      clickable: false,
      store: "ipfs",
    });
    setMintValue(data);
  };
  const onChangeMinusMint = (num) => {
    let data = [];
    mintValue.map((item) => item.num !== num && data.push(item));
    setMintValue(data);
  };
  const onChangeSetting = (num) => {
    const data = mintValue.map((item) => {
      if (item.num === num) {
        item.clickable = !item.clickable;
      }
      return item;
    });
    setMintValue(data);
  };
  const onChangeInput = (e, num) => {
    const data = mintValue.map((item) => {
      if (item.num === num) {
        item[e.target.name] = e.target.value;
      }
      return item;
    });
    setMintValue(data);
  };
  const onChangeStore = (e, num) => {
    console.log(e.target.value, num);
    const data = mintValue.map((item) => {
      if (item.num === num) {
        item.store = e.target.value;
      }
      return item;
    });
    setMintValue(data);
  };
  return (
    <StyledHeader>
      <Col align="center" width="740px">
        <Row
          margin="100px 0 0 0"
          mgap="0 30px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            mgap="0 20px 0 0"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Add to collection
            </Text>
            <AiOutlineDownCircle size="40" color="white" />
          </Row>
          <CreateModal
            open={creModal}
            onCreateModal={setCreModal}
            collection={collection}
            description={description}
            setCollection={setCollection}
            setDescription={setDescription}
          />
          <Row
            padding="28px 25px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
            onClick={() => setCreModal(true)}
          >
            <Text fontWeight="bold" fontSize="20px">
              New collection
            </Text>
          </Row>
        </Row>
        <Row
          margin="25px 0 0 0"
          mgap="0 20px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Single NFT
            </Text>
          </Row>
          <SwitchButton checked={singleNFT} onClick={setSingleNFT} />
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Multiple NFTs
            </Text>
          </Row>
        </Row>

        <Row
          margin="25px 0 0 0"
          mgap="0 30px 0 0"
          width="100%"
          justify="space-between"
        >
          <Row
            padding="20px 33px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Single File
            </Text>
          </Row>
          <SwitchButton checked={singleFile} onClick={setSingleFile} />
          <Row
            padding="20px 33px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            margin="0 0 0 20px"
            cursor="pointer"
          >
            <Text fontWeight="bold" fontSize="20px">
              Multiple Files
            </Text>
          </Row>
        </Row>
        <Row margin="25px 0 0 0" mgap="0 30px 0 0">
          <Col
            backgroundColor="grey"
            width="350px"
            height="250px"
            padding="30px 30px"
            align="center"
          >
            <Text fontWeight="bold" fontSize="30px" align="center">
              DISPLAY FILE
            </Text>
            <Text fontWeight="bold" fontSize="18px" align="center">
              This file is displayed on the CryptoHipHop marketplace.
            </Text>
          </Col>
          <Col
            backgroundColor="grey"
            width="350px"
            height="250px"
            padding="30px 30px"
            align="center"
          >
            <Text fontWeight="bold" fontSize="30px">
              MINTERFACE
            </Text>
            <Text fontWeight="bold" fontSize="18px" align="center">
              Upload your file that is meant to be the NFTs content. We upload
              it either to Arweave or IPFS depending on the file size
            </Text>
          </Col>
        </Row>

        {mintValue.map((item, key) => {
          return (
            <div key={key + 1}>
              <Row
                margin="25px 0 0 0"
                mgap="0 30px 0 0"
                width="100%"
                justify="space-between"
              >
                <Col maxWidth="40%" position="relative">
                  <Col
                    backgroundColor="#996b45"
                    width="300px"
                    height="250px"
                    padding="30px 30px"
                    align="center"
                    position="absolute"
                    zIndex="2"
                    top="-150px"
                    left="25px"
                    display={item.clickable ? "flex" : "none"}
                  >
                    <Text fontWeight="bold" fontSize="30px" align="center">
                      ADVANCED SETTINGS
                    </Text>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      value={item.store === "ipfs" ? "ipfs" : "arweave"}
                      name="radio-buttons-group"
                      onChange={(e) => {
                        onChangeStore(e, item.num);
                      }}
                    >
                      <Row width="100%">
                        <Text fontWeight="bold" fontSize="18px">
                          STORE ON IPFS
                        </Text>
                        <Radio value="ipfs" />
                      </Row>
                      <Row width="100%">
                        <Text fontWeight="bold" fontSize="18px">
                          STORE ON ARWEAVE
                        </Text>
                        <Radio value="arweave" />
                      </Row>
                    </RadioGroup>
                  </Col>

                  <CustomInput
                    fontWeight="bold"
                    fontSize="20px"
                    placeholder="Name..."
                    value={item.name}
                    backgroundColor="transparent"
                    fontColor="white"
                    padding="20px 30px"
                    border="10px solid #5ce1e6 !important"
                    borderRadius="10px"
                    width="100%"
                    name="name"
                    onChange={(e) => {
                      onChangeInput(e, item.num);
                    }}
                  />

                  <Row justify="space-between" margin="20px 0 0 0" width="100%">
                    <Text fontWeight="bold" fontSize="20px" align="center">
                      Advanced Settings
                    </Text>
                    <AiTwotoneSetting
                      size="50"
                      color="grey"
                      cursor="pointer"
                      onClick={() => {
                        onChangeSetting(item.num);
                      }}
                    />
                  </Row>
                </Col>
                <Row
                  height="200px"
                  maxWidth="48%"
                  width="400px"
                  border="10px solid #5ce1e6 !important"
                  borderRadius="10px"
                  align="flex-start"
                  padding="30px"
                >
                  <CustomArea
                    placeholder="Description.."
                    value={item.description}
                    name="description"
                    onChange={(e) => {
                      onChangeInput(e, item.num);
                    }}
                  />
                </Row>
              </Row>
              <Row
                margin="25px 0 0 0"
                width="100%"
                justify="space-between"
                position="relative"
              >
                <CustomInput
                  fontWeight="bold"
                  fontSize="20px"
                  fontColor="white"
                  placeholder="Variant name..."
                  backgroundColor="transparent"
                  padding="20px 30px"
                  border="10px solid #5ce1e6 !important"
                  borderRadius="10px"
                  width="45%"
                  name="value"
                  value={item.value}
                  onChange={(e) => {
                    onChangeInput(e, item.num);
                  }}
                />
                <CustomInput
                  fontWeight="bold"
                  fontSize="20px"
                  placeholder="Variant...(not required)"
                  backgroundColor="transparent"
                  fontColor="white"
                  padding="20px 30px"
                  border="10px solid #5ce1e6 !important"
                  borderRadius="10px"
                  width="48%"
                  value={item.other}
                  name="other"
                  onChange={(e) => {
                    onChangeInput(e, item.num);
                  }}
                />
                <CustomButton disabled={true}>
                  {item.flag === false ? (
                    <BiMinus
                      size="30"
                      color="black"
                      onClick={() => item.num && onChangeMinusMint(item.num)}
                    />
                  ) : (
                    <GoPlus
                      size="30"
                      color="black"
                      onClick={() => {
                        onChangePlusMint(item.num);
                      }}
                    />
                  )}
                </CustomButton>
              </Row>
            </div>
          );
        })}

        <Row margin="25px 0 50px 0">
          <Row
            padding="20px 30px"
            border="10px solid #5ce1e6 !important"
            borderRadius="10px"
            cursor="pointer"
            // onClick={() => setMintModal(true)}
          >
            <Text fontWeight="bold" fontSize="20px">
              MINT NOW
            </Text>
            {/* <MintModal
              mintValue={mintValue}
              open={mintModal}
              onMintModal={setMintModal}
              collection={collection}
              description={description}
            /> */}
          </Row>
        </Row>
      </Col>
    </StyledHeader>
  );
};
export default Header;
