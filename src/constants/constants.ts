export const initialForm = {
  rawXml: `<?xml version="1.0" encoding="utf-8"?>
<TransactionLogLookupResponse xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:r10Ex="http://www.Retalix.com/Extensions" MajorVersion="1" xmlns="http://retalix.com/R10/services">
    <ResponseHeader>
        <Response ResponseCode="OK">
            <RequestID>LT011_383</RequestID>
        </Response>
    </ResponseHeader>
    <LogDocuments>
  <Transaction MajorVersion="6" MinorVersion="0" FixVersion="1">
    <BusinessUnit>
      <UnitID Name="บริษัท เอก-ชัยฯ รามอินทรา (1101)">1101</UnitID>
    </BusinessUnit>
    <WorkstationID r10Ex:TaxRegistrationNumber="B02019000201328" TypeCode="POS" WorkstationLocation="4">002</WorkstationID>
    <SequenceNumber>543</SequenceNumber>
    <TransactionID>8UJUEBVZ2O</TransactionID>
    <OperatorID OperatorName="pond te***" WorkerID="d8c39efd-9781-44ad-a282-456ca8b6d3dc" OperatorType="Supervisor">Pondx</OperatorID>
    <RetailTransaction>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>000705438</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">3-3-1-11</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">2-3-3-1-11</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">558</MerchandiseHierarchy>
          <ItemID Type="EAN13">8850187000018</ItemID>
          <Description r10Ex:Culture="th-TH">ฉัตรข้าวหอมผสม 5กก.</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">ฉัตรข้าวหอมผสม 5กก.</Description>
          <RegularSalesUnitPrice Currency="THB">159.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">159.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">159.00</ExtendedAmount>
          <ExtendedDiscountAmount Currency="THB">27.05</ExtendedDiscountAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <RetailPriceModifier>
            <SequenceNumber>1</SequenceNumber>
            <Amount Currency="THB" Action="Subtract">27.05</Amount>
            <PromotionID>PaybyPointsDiscount</PromotionID>
            <Description>ส่วนลดแลกคอยน์</Description>
            <LineItemRewardPromotion xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TriggerQuantity Units="1" UnitOfMeasureCode="EA">1</TriggerQuantity>
              <TriggerAmount>159</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">27.05</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">27.05</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">27.05</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
          </RetailPriceModifier>
          <Tax r10Ex:Sign="N" r10Ex:Imposition="E" r10Ex:AmountBeforeRounding="0.000" r10Ex:TaxableAmountBeforeRounding="131.950">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">131.95</TaxableAmount>
            <Amount Currency="THB">0.00</Amount>
            <Percent>0.0000</Percent>
            <TaxRuleID>E</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">131.95</TaxableAmount>
                <TaxAmount Currency="THB">0.00</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">131.95</r10Ex:NetAmount>
          <r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts Currency="THB">27.05</r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">131.95</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxE</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="N" Priority="3" xmlns="http://www.Retalix.com/Extensions" />
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928156997191</PromotionID>
            <Description>ได้รับคูปองส่วนลด 50 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>159</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>1</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Member Account</Type>
            <Value>1.3</Value>
            <PromotionID>LoyaltyPointsEarn</PromotionID>
            <Description>ได้รับคะแนนสมาชิก</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>131.95</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">1.3</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">1.3</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">1.3</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>2</SequenceNumber>
            <DeferredID>Lotuscoinpointaccoun</DeferredID>
          </PromotionDeferredRewards>
        </Sale>
        <ScanData>8850187000018</ScanData>
        <SequenceNumber>1</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:41.024</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:41.024</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>006938388</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">3-3-2-1</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">2-3-3-2-1</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">2665</MerchandiseHierarchy>
          <ItemID Type="EAN13">8851683000267</ItemID>
          <Description r10Ex:Culture="th-TH">ไร่ทิพย์ถั่วเขียวซีก500ก</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">ไร่ทิพย์ั่ถั่วเขียวเลาะเปลือก 500ก.</Description>
          <RegularSalesUnitPrice Currency="THB">42.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">42.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">42.00</ExtendedAmount>
          <ExtendedDiscountAmount Currency="THB">7.15</ExtendedDiscountAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <RetailPriceModifier>
            <SequenceNumber>1</SequenceNumber>
            <Amount Currency="THB" Action="Subtract">7.15</Amount>
            <PromotionID>PaybyPointsDiscount</PromotionID>
            <Description>ส่วนลดแลกคอยน์</Description>
            <LineItemRewardPromotion xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TriggerQuantity Units="1" UnitOfMeasureCode="EA">1</TriggerQuantity>
              <TriggerAmount>42</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">7.15</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">7.15</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">7.15</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
          </RetailPriceModifier>
          <Tax r10Ex:Sign="N" r10Ex:Imposition="E" r10Ex:AmountBeforeRounding="0.000" r10Ex:TaxableAmountBeforeRounding="34.850">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">34.85</TaxableAmount>
            <Amount Currency="THB">0.00</Amount>
            <Percent>0.0000</Percent>
            <TaxRuleID>E</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">34.85</TaxableAmount>
                <TaxAmount Currency="THB">0.00</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">34.85</r10Ex:NetAmount>
          <r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts Currency="THB">7.15</r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">34.85</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxE</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="N" Priority="3" xmlns="http://www.Retalix.com/Extensions" />
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928156997191</PromotionID>
            <Description>ได้รับคูปองส่วนลด 50 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>42</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>1</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
        </Sale>
        <ScanData>8851683000267</ScanData>
        <SequenceNumber>2</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:45.608</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:45.608</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>074487310</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">37-211-1-3</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">9-37-211-1-3</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">1752</MerchandiseHierarchy>
          <ItemID Type="X:EANNON">8850999009674</ItemID>
          <Description r10Ex:Culture="th-TH">ลีโอ เบียร์กระป๋อง490มล.</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">S_ลีโอ เบียร์กระป๋อง 490 มล.</Description>
          <RegularSalesUnitPrice Currency="THB">52.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">52.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">52.00</ExtendedAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <Tax r10Ex:Sign="X" r10Ex:Imposition="G" r10Ex:AmountBeforeRounding="3.402" r10Ex:TaxableAmountBeforeRounding="48.598">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">48.60</TaxableAmount>
            <Amount Currency="THB">3.40</Amount>
            <Percent>7.0000</Percent>
            <TaxRuleID>G</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">48.60</TaxableAmount>
                <TaxAmount Currency="THB">3.40</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">52</r10Ex:NetAmount>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">52</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>ProhibitDiscount</Type>
            <ID>2009</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2051_2</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2110</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxG</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="X" Priority="2" xmlns="http://www.Retalix.com/Extensions" />
        </Sale>
        <ScanData>8850999009674</ScanData>
        <SequenceNumber>3</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:52.09</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:52.09</EndDateTime>
        <OperatorBypassApproval>
          <SequenceNumber>1</SequenceNumber>
          <ApproverID />
          <ApprovalDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:22.753</ApprovalDateTime>
          <PolicyRuleManager xmlns="http://www.Retalix.com/Extensions">
            <Policy PolicyID="AgeRestriction18Alcohol">
              <PolicyRule RuleType="CustomerAge" EntryMethod="Keyed">
                <BusinessAction MessageName="UnderAge18Message" ActionType="AgeConfirmation" InputValue="18+" IsApproved="Yes" />
                <ApproverID OperatorName="pond te***" OperatorType="Supervisor">Pondx</ApproverID>
              </PolicyRule>
            </Policy>
          </PolicyRuleManager>
        </OperatorBypassApproval>
        <OperatorBypassApproval>
          <SequenceNumber>2</SequenceNumber>
          <ApproverID />
          <ApprovalDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:22.759</ApprovalDateTime>
          <PolicyRuleManager xmlns="http://www.Retalix.com/Extensions">
            <Policy PolicyID="AgeRestriction18Alcohol2">
              <PolicyRule RuleType="CustomerAge" EntryMethod="Automatic">
                <BusinessAction MessageName="UnderAge18Message" ActionType="AgeConfirmation" InputValue="18+" IsApproved="Yes" />
                <ApproverID OperatorName="pond te***" OperatorType="Supervisor">Pondx</ApproverID>
              </PolicyRule>
            </Policy>
          </PolicyRuleManager>
        </OperatorBypassApproval>
        <OperatorBypassApproval>
          <SequenceNumber>1</SequenceNumber>
          <ApproverID />
          <Description>Alcohol</Description>
          <BusinessRuleManager xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <BusinessRule RuleName="Alcohol">
              <BusinessAction MessageName="AlcoholNotification" ActionType="Notification" IsApproved="Yes" />
            </BusinessRule>
          </BusinessRuleManager>
        </OperatorBypassApproval>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale NotNormallyStockedFlag="true">
          <POSIdentity>
            <POSItemID>074489089</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">37-211-1-2</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">9-37-211-1-2</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">2950</MerchandiseHierarchy>
          <ItemID Type="X:EANNON">8850999006925</ItemID>
          <Description r10Ex:Culture="th-TH">สิงห์ขวดใหญ่ 620 มล.X3</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">สิงห์ เบียร์ขวดใหญ่ 620มล.X3</Description>
          <RegularSalesUnitPrice Currency="THB">188.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">188.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">188.00</ExtendedAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <Tax r10Ex:Sign="X" r10Ex:Imposition="G" r10Ex:AmountBeforeRounding="12.037" r10Ex:TaxableAmountBeforeRounding="171.963">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">171.96</TaxableAmount>
            <Amount Currency="THB">12.04</Amount>
            <Percent>7.0000</Percent>
            <TaxRuleID>G</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">171.96</TaxableAmount>
                <TaxAmount Currency="THB">12.04</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">188</r10Ex:NetAmount>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">188</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>ProhibitDiscount</Type>
            <ID>2009</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2051_2</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2110</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>TaxOnCentralPrice</Type>
            <ID>3120</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxG</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="X" Priority="2" xmlns="http://www.Retalix.com/Extensions" />
        </Sale>
        <ScanData>8850999006925</ScanData>
        <SequenceNumber>4</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:57.248</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:57.248</EndDateTime>
        <OperatorBypassApproval>
          <SequenceNumber>1</SequenceNumber>
          <ApproverID />
          <ApprovalDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:22.759</ApprovalDateTime>
          <PolicyRuleManager xmlns="http://www.Retalix.com/Extensions">
            <Policy PolicyID="AgeRestriction18Alcohol">
              <PolicyRule RuleType="CustomerAge" EntryMethod="Automatic">
                <BusinessAction MessageName="UnderAge18Message" ActionType="AgeConfirmation" InputValue="18+" IsApproved="Yes" />
                <ApproverID OperatorName="pond te***" OperatorType="Supervisor">Pondx</ApproverID>
              </PolicyRule>
            </Policy>
          </PolicyRuleManager>
        </OperatorBypassApproval>
        <OperatorBypassApproval>
          <SequenceNumber>2</SequenceNumber>
          <ApproverID />
          <ApprovalDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:22.759</ApprovalDateTime>
          <PolicyRuleManager xmlns="http://www.Retalix.com/Extensions">
            <Policy PolicyID="AgeRestriction18Alcohol2">
              <PolicyRule RuleType="CustomerAge" EntryMethod="Automatic">
                <BusinessAction MessageName="UnderAge18Message" ActionType="AgeConfirmation" InputValue="18+" IsApproved="Yes" />
                <ApproverID OperatorName="pond te***" OperatorType="Supervisor">Pondx</ApproverID>
              </PolicyRule>
            </Policy>
          </PolicyRuleManager>
        </OperatorBypassApproval>
        <OperatorBypassApproval>
          <SequenceNumber>3</SequenceNumber>
          <ApproverID />
          <ApprovalDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:22.759</ApprovalDateTime>
          <PolicyRuleManager xmlns="http://www.Retalix.com/Extensions">
            <Policy PolicyID="AgeRestrictionTobacco">
              <PolicyRule RuleType="CustomerAge" EntryMethod="Automatic">
                <BusinessAction MessageName="AgeRestrictionTobaccoMessage" ActionType="AgeConfirmation" InputValue="18+" IsApproved="Yes" />
                <ApproverID OperatorName="pond te***" OperatorType="Supervisor">Pondx</ApproverID>
              </PolicyRule>
            </Policy>
          </PolicyRuleManager>
        </OperatorBypassApproval>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>012134864</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">37-212-2-3</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">9-37-212-2-3</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">1701</MerchandiseHierarchy>
          <ItemID Type="EAN8">76164170</ItemID>
          <Description r10Ex:Culture="th-TH">LM บุหรี่ เมนทอลซองแข็ง</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">บุหรี่แอลแอนด์เอ็ม(ขาว)เมนทอลซองแข็ง1ซอ</Description>
          <RegularSalesUnitPrice Currency="THB">20.97</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">20.97</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">20.97</ExtendedAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <Tax r10Ex:Sign="X" r10Ex:Imposition="G" r10Ex:AmountBeforeRounding="1.372" r10Ex:TaxableAmountBeforeRounding="19.598">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">19.60</TaxableAmount>
            <Amount Currency="THB">1.37</Amount>
            <Percent>7.0000</Percent>
            <TaxRuleID>G</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">19.60</TaxableAmount>
                <TaxAmount Currency="THB">1.37</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">20.97</r10Ex:NetAmount>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">20.97</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>ProhibitDiscount</Type>
            <ID>2009</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2051_2</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>2110</ID>
          </ConsumableGroup>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxG</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="X" Priority="2" xmlns="http://www.Retalix.com/Extensions" />
        </Sale>
        <ScanData>76164170</ScanData>
        <SequenceNumber>5</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:01.97</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:01.97</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>000001856</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">7-44-10-5</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">3-7-44-10-5</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">3724</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Color">CL:650</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Size">SZ:S</MerchandiseHierarchy>
          <ItemID Type="X:EANNON">2502010759582</ItemID>
          <Description r10Ex:Culture="th-TH">กางเกงขาสั้นสีพื้น</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">LBW2DG01P กางเกงขาสั้นสีพื้น:ชมพู:S</Description>
          <RegularSalesUnitPrice Currency="THB">169.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">169.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">169.00</ExtendedAmount>
          <ExtendedDiscountAmount Currency="THB">28.75</ExtendedDiscountAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <RetailPriceModifier>
            <SequenceNumber>1</SequenceNumber>
            <Amount Currency="THB" Action="Subtract">28.75</Amount>
            <PromotionID>PaybyPointsDiscount</PromotionID>
            <Description>ส่วนลดแลกคอยน์</Description>
            <LineItemRewardPromotion xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TriggerQuantity Units="1" UnitOfMeasureCode="EA">1</TriggerQuantity>
              <TriggerAmount>169</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">28.75</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">28.75</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">28.75</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
          </RetailPriceModifier>
          <Tax r10Ex:Sign="V" r10Ex:Imposition="S" r10Ex:AmountBeforeRounding="9.175" r10Ex:TaxableAmountBeforeRounding="131.075">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">131.07</TaxableAmount>
            <Amount Currency="THB">9.18</Amount>
            <Percent>7.0000</Percent>
            <TaxRuleID>S</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">131.07</TaxableAmount>
                <TaxAmount Currency="THB">9.18</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">140.25</r10Ex:NetAmount>
          <r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts Currency="THB">28.75</r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">140.25</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxS</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="V" Priority="1" xmlns="http://www.Retalix.com/Extensions" />
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928156987505</PromotionID>
            <Description>ได้รับคูปองส่วนลด 20 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>169</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>1</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928156997191</PromotionID>
            <Description>ได้รับคูปองส่วนลด 50 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>169</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>2</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928157007820</PromotionID>
            <Description>ได้รับคูปองส่วนลดเงินสด 100 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>169</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>3</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Member Account</Type>
            <Value>1.39</Value>
            <PromotionID>LoyaltyPointsEarn</PromotionID>
            <Description>ได้รับคะแนนสมาชิก</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>140.25</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">1.39</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">1.39</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">1.39</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>4</SequenceNumber>
            <DeferredID>Lotuscoinpointaccoun</DeferredID>
          </PromotionDeferredRewards>
        </Sale>
        <ScanData>2502010759582</ScanData>
        <SequenceNumber>6</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:05.433</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:05.433</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Scanned">
        <Sale>
          <POSIdentity>
            <POSItemID>000004235</POSItemID>
          </POSIdentity>
          <MerchandiseHierarchy ID="Merchandise">7-44-10-5</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="WeighedAtScale">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="ItemIsWeighted">N</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Division">3-7-44-10-5</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Brand">3724</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Color">CL:650</MerchandiseHierarchy>
          <MerchandiseHierarchy ID="Size">SZ:M</MerchandiseHierarchy>
          <ItemID Type="X:EANNON">2502010759599</ItemID>
          <Description r10Ex:Culture="th-TH">กางเกงขาสั้นสีพื้น</Description>
          <Description TypeCode="Long" r10Ex:Culture="th-TH">LBW2DG01P กางเกงขาสั้นสีพื้น:ชมพู:M</Description>
          <RegularSalesUnitPrice Currency="THB">159.00</RegularSalesUnitPrice>
          <ActualSalesUnitPrice Currency="THB">159.00</ActualSalesUnitPrice>
          <ExtendedAmount Currency="THB">159.00</ExtendedAmount>
          <ExtendedDiscountAmount Currency="THB">27.05</ExtendedDiscountAmount>
          <Quantity Units="1" UnitOfMeasureCode="EA" EntryMethod="Automatic">1</Quantity>
          <RetailPriceModifier>
            <SequenceNumber>1</SequenceNumber>
            <Amount Currency="THB" Action="Subtract">27.05</Amount>
            <PromotionID>PaybyPointsDiscount</PromotionID>
            <Description>ส่วนลดแลกคอยน์</Description>
            <LineItemRewardPromotion xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TriggerQuantity Units="1" UnitOfMeasureCode="EA">1</TriggerQuantity>
              <TriggerAmount>159</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">27.05</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">27.05</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">27.05</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
          </RetailPriceModifier>
          <Tax r10Ex:Sign="V" r10Ex:Imposition="S" r10Ex:AmountBeforeRounding="8.632" r10Ex:TaxableAmountBeforeRounding="123.318">
            <SequenceNumber>1</SequenceNumber>
            <TaxAuthority>TaxAuthority</TaxAuthority>
            <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">123.32</TaxableAmount>
            <Amount Currency="THB">8.63</Amount>
            <Percent>7.0000</Percent>
            <TaxRuleID>S</TaxRuleID>
            <TaxGroupID>1</TaxGroupID>
            <TaxPerUnits xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
              <TaxPerUnit SequenceNumber="1">
                <TaxableAmount Currency="THB">123.32</TaxableAmount>
                <TaxAmount Currency="THB">8.63</TaxAmount>
                <ExemptTaxAmount Currency="THB">0</ExemptTaxAmount>
              </TaxPerUnit>
            </TaxPerUnits>
          </Tax>
          <r10Ex:NetAmount Currency="THB">131.95</r10Ex:NetAmount>
          <r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts Currency="THB">27.05</r10Ex:ExtendedDiscountAmountExcludingTicketDiscounts>
          <r10Ex:NetAmountExcludingTicketDiscounts Currency="THB">131.95</r10Ex:NetAmountExcludingTicketDiscounts>
          <ConsumableGroup xmlns="http://www.Retalix.com/Extensions">
            <Type>Consumable</Type>
            <ID>TaxS</ID>
          </ConsumableGroup>
          <GroupIndicator Indicator="Indication" Group="TaxIndicatorsGroup" Symbol="V" Priority="1" xmlns="http://www.Retalix.com/Extensions" />
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Coupon</Type>
            <Value>0</Value>
            <PromotionID>9928156997191</PromotionID>
            <Description>ได้รับคูปองส่วนลด 50 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>159</TriggerAmount>
              <ApportionmentAmount Currency="THB">0</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">0</RewardSplitAmount>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>1</SequenceNumber>
            <DeferredID />
          </PromotionDeferredRewards>
          <PromotionDeferredRewards xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
            <Type>Member Account</Type>
            <Value>1.31</Value>
            <PromotionID>LoyaltyPointsEarn</PromotionID>
            <Description>ได้รับคะแนนสมาชิก</Description>
            <LineItemRewardPromotion>
              <TriggerQuantity>1</TriggerQuantity>
              <TriggerAmount>131.95</TriggerAmount>
              <ApportionmentAmount Currency="THB" Participator="Retailer">1.31</ApportionmentAmount>
              <RewardSplitAmount Currency="THB">1.31</RewardSplitAmount>
              <UnitLines>
                <RewardSplitUnitAmount SequenceNumber="1">1.31</RewardSplitUnitAmount>
              </UnitLines>
              <RewardLevel>1</RewardLevel>
            </LineItemRewardPromotion>
            <SequenceNumber>2</SequenceNumber>
            <DeferredID>Lotuscoinpointaccoun</DeferredID>
          </PromotionDeferredRewards>
        </Sale>
        <ScanData>2502010759599</ScanData>
        <SequenceNumber>7</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:07.503</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:43:07.503</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Tapped">
        <Tender TenderType="Cash">
          <Amount Currency="THB">1000.00</Amount>
          <Cashback Currency="THB">0</Cashback>
          <TenderID>1</TenderID>
          <r10Ex:TenderDescription>เงินสด</r10Ex:TenderDescription>
          <r10Ex:IsAutoReconcile>False</r10Ex:IsAutoReconcile>
        </Tender>
        <SequenceNumber>8</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.681</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.681</EndDateTime>
      </LineItem>
      <LineItem EntryMethod="Tapped">
        <Tender TenderType="Cash">
          <Amount Currency="THB">0</Amount>
          <TenderChange>
            <Amount Currency="THB">300.00</Amount>
          </TenderChange>
          <Cashback Currency="THB">0</Cashback>
          <TenderID>1</TenderID>
          <r10Ex:TenderDescription>เงินสด</r10Ex:TenderDescription>
          <r10Ex:IsAutoReconcile>False</r10Ex:IsAutoReconcile>
        </Tender>
        <SequenceNumber>9</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.703</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.703</EndDateTime>
        <ItemLink>8</ItemLink>
      </LineItem>
      <LineItem EntryMethod="Automatic">
        <Tender TenderType="X:Rounding">
          <Amount Currency="THB">0.03</Amount>
          <Cashback Currency="THB">0</Cashback>
          <Rounding Currency="THB" RoundingDirection="Up">0.03</Rounding>
          <TenderID>9</TenderID>
          <r10Ex:TenderDescription>ส่วนลดพิเศษ</r10Ex:TenderDescription>
          <r10Ex:IsAutoReconcile>True</r10Ex:IsAutoReconcile>
        </Tender>
        <SequenceNumber>10</SequenceNumber>
        <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.703</BeginDateTime>
        <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.703</EndDateTime>
      </LineItem>
      <LineItem>
        <Tax r10Ex:Imposition="E">
          <SequenceNumber>1</SequenceNumber>
          <TaxAuthority>TaxAuthority</TaxAuthority>
          <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">166.80</TaxableAmount>
          <Amount Currency="THB">0.00</Amount>
          <Percent>0.0000</Percent>
          <TaxRuleID>E</TaxRuleID>
          <TaxGroupID>1</TaxGroupID>
        </Tax>
        <SequenceNumber>11</SequenceNumber>
      </LineItem>
      <LineItem>
        <Tax r10Ex:Imposition="G">
          <SequenceNumber>2</SequenceNumber>
          <TaxAuthority>TaxAuthority</TaxAuthority>
          <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">240.16</TaxableAmount>
          <Amount Currency="THB">16.81</Amount>
          <Percent>7.0000</Percent>
          <TaxRuleID>G</TaxRuleID>
          <TaxGroupID>1</TaxGroupID>
        </Tax>
        <SequenceNumber>12</SequenceNumber>
      </LineItem>
      <LineItem>
        <Tax r10Ex:Imposition="S">
          <SequenceNumber>3</SequenceNumber>
          <TaxAuthority>TaxAuthority</TaxAuthority>
          <TaxableAmount Currency="THB" TaxIncludedInTaxableAmountFlag="true">254.39</TaxableAmount>
          <Amount Currency="THB">17.81</Amount>
          <Percent>7.0000</Percent>
          <TaxRuleID>S</TaxRuleID>
          <TaxGroupID>1</TaxGroupID>
        </Tax>
        <SequenceNumber>13</SequenceNumber>
      </LineItem>
      <Total CurrencyCode="THB">789.97</Total>
      <Total TotalType="TransactionNetAmount" CurrencyCode="THB">699.97</Total>
      <Total TotalType="TransactionPurchaseQuantity">7</Total>
      <Total TotalType="TransactionPurchaseQuantity" TypeCode="Return">0</Total>
      <Total TotalType="X:TransactionTaxIncluded" CurrencyCode="THB">34.62</Total>
      <Total TotalType="X:TransactionTaxSurcharge" CurrencyCode="THB">0.00</Total>
      <Total TotalType="X:TransactionTaxFee" CurrencyCode="THB">0.00</Total>
      <Total TotalType="X:ItemTaxFee" CurrencyCode="THB">0.00</Total>
      <Total TotalType="TransactionTotalSavings" CurrencyCode="THB">90.00</Total>
      <Total TotalType="TransactionGrandAmount" CurrencyCode="THB">699.97</Total>
      <Total TotalType="X:TransactionTotalVoidAmount" CurrencyCode="THB">0.00</Total>
      <Total TotalType="X:TransactionTotalReturnAmount" CurrencyCode="THB">0.00</Total>
      <Total TotalType="TransactionTaxExemptAmount" CurrencyCode="THB">0.00</Total>
      <Total TotalType="TransactionTenderApplied" CurrencyCode="THB">699.97</Total>
      <Total TotalType="X:CashbackTotalAmount" CurrencyCode="THB">0.00</Total>
      <Total TotalType="X:TransactionMerchandiseAmount" CurrencyCode="THB">789.97</Total>
      <Total TotalType="X:TransactionNonMerchandiseAmount" CurrencyCode="THB">0.00</Total>
      <Total TotalType="X:NonResettableGrandTotal" CurrencyCode="THB">304786.07</Total>
      <Total TotalType="X:PreviousNonResettableGrandTotal" CurrencyCode="THB">274728.10</Total>
      <Customer r10Ex:EntryMethod="Scanned" r10Ex:IsAuthenticatedOffline="False">
        <CustomerID>0031s00000qU4qKAAS</CustomerID>
        <r10Ex:ScanData>634000669772788829</r10Ex:ScanData>
        <r10Ex:CustomerExternalId>66977278882</r10Ex:CustomerExternalId>
        <r10Ex:CustomerType>Loyalty</r10Ex:CustomerType>
      </Customer>
      <LoyaltyAccount>
        <CustomerID>0031s00000qU4qKAAS</CustomerID>
        <LoyaltyProgram>
          <LoyaltyAccountID>Lotuscoinpointaccoun</LoyaltyAccountID>
          <Points Type="X:OpenBalance">24733</Points>
          <Points Type="Balance">24647</Points>
          <Points Type="Redeemed">90</Points>
          <Points Type="PointsEarned">4</Points>
        </LoyaltyProgram>
      </LoyaltyAccount>
      <TaxDefinitions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
        <TaxAuthority>
          <AuthorityId>1</AuthorityId>
          <Descriptions>
            <Description Culture="th-TH">TaxAuthority</Description>
          </Descriptions>
        </TaxAuthority>
        <TaxRate>
          <RateId>E</RateId>
          <Type>Tax</Type>
          <AuthorityId>1</AuthorityId>
          <Descriptions>
            <Description Culture="th-TH">TaxE</Description>
          </Descriptions>
          <IsIncluded>true</IsIncluded>
          <TaxCalculatedMethodPercent>
            <Value>0.0000</Value>
            <ImpositionId>E</ImpositionId>
          </TaxCalculatedMethodPercent>
          <TaxIndicator>N</TaxIndicator>
          <RoundingType>Standard</RoundingType>
          <CouponReducesTaxationAmount>false</CouponReducesTaxationAmount>
        </TaxRate>
        <TaxRate>
          <RateId>G</RateId>
          <Type>Tax</Type>
          <AuthorityId>1</AuthorityId>
          <Descriptions>
            <Description Culture="th-TH">TaxG</Description>
          </Descriptions>
          <IsIncluded>true</IsIncluded>
          <TaxCalculatedMethodPercent>
            <Value>7.0000</Value>
            <ImpositionId>G</ImpositionId>
          </TaxCalculatedMethodPercent>
          <TaxIndicator>X</TaxIndicator>
          <RoundingType>Standard</RoundingType>
          <CouponReducesTaxationAmount>false</CouponReducesTaxationAmount>
        </TaxRate>
        <TaxRate>
          <RateId>S</RateId>
          <Type>Tax</Type>
          <AuthorityId>1</AuthorityId>
          <Descriptions>
            <Description Culture="th-TH">TaxS</Description>
          </Descriptions>
          <IsIncluded>true</IsIncluded>
          <TaxCalculatedMethodPercent>
            <Value>7.0000</Value>
            <ImpositionId>S</ImpositionId>
          </TaxCalculatedMethodPercent>
          <TaxIndicator>V</TaxIndicator>
          <RoundingType>Standard</RoundingType>
          <CouponReducesTaxationAmount>false</CouponReducesTaxationAmount>
        </TaxRate>
      </TaxDefinitions>
      <PromotionsSummary xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
        <PromotionSummary>
          <PromotionID>9928156987505</PromotionID>
          <RedemptionQuantity>1</RedemptionQuantity>
          <TotalRewardAmount Currency="THB">20.00</TotalRewardAmount>
          <IssuedCoupons>
            <IssuesCoupon r10Ex:IsExternal="True" r10Ex:IsIssued="True" Identifier="76569667-4705-41ee-8f1b-b731495e2706" SeriesId="992" OfferId="9928156987505" StartDate="2023-10-16" ExpiryDate="2023-12-31">
              <Description />
              <ScanCode>9926805587194296176096</ScanCode>
              <RewardValue>20.00</RewardValue>
            </IssuesCoupon>
          </IssuedCoupons>
          <RewardType>Coupon</RewardType>
          <PromotionDescription>ได้รับคูปองส่วนลด 20 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</PromotionDescription>
          <QualifyingSpent>169.00</QualifyingSpent>
          <TriggerTiming>UponTotal</TriggerTiming>
        </PromotionSummary>
        <PromotionSummary>
          <PromotionID>9928156997191</PromotionID>
          <RedemptionQuantity>1</RedemptionQuantity>
          <TotalRewardAmount Currency="THB">50.00</TotalRewardAmount>
          <IssuedCoupons>
            <IssuesCoupon r10Ex:IsExternal="True" r10Ex:IsIssued="True" Identifier="173f88d3-0890-43c2-9aa9-21bd3e596d8f" SeriesId="992" OfferId="9928156997191" StartDate="2023-10-16" ExpiryDate="2023-12-31">
              <Description />
              <ScanCode>9926995187198296367456</ScanCode>
              <RewardValue>50.00</RewardValue>
            </IssuesCoupon>
          </IssuedCoupons>
          <RewardType>Coupon</RewardType>
          <PromotionDescription>ได้รับคูปองส่วนลด 50 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</PromotionDescription>
          <QualifyingSpent>529.00</QualifyingSpent>
          <TriggerTiming>UponTotal</TriggerTiming>
        </PromotionSummary>
        <PromotionSummary>
          <PromotionID>9928157007820</PromotionID>
          <RedemptionQuantity>1</RedemptionQuantity>
          <TotalRewardAmount Currency="THB">100.00</TotalRewardAmount>
          <IssuedCoupons>
            <IssuesCoupon r10Ex:IsExternal="True" r10Ex:IsIssued="True" Identifier="acf4d9e3-b631-4daa-a185-c55b7a7dc287" SeriesId="992" OfferId="9928157007820" StartDate="2023-10-16" ExpiryDate="2023-12-31">
              <Description />
              <ScanCode>9927025887101296962735</ScanCode>
              <RewardValue>100.00</RewardValue>
            </IssuesCoupon>
          </IssuedCoupons>
          <RewardType>Coupon</RewardType>
          <PromotionDescription>ได้รับคูปองส่วนลดเงินสด 100 บาทเมื่อซื้อสินค้าที่ร่วมรายการ</PromotionDescription>
          <QualifyingSpent>169.00</QualifyingSpent>
          <TriggerTiming>UponTotal</TriggerTiming>
        </PromotionSummary>
        <PromotionSummary>
          <PromotionID>PaybyPointsDiscount</PromotionID>
          <RedemptionQuantity>90</RedemptionQuantity>
          <TotalRewardAmount Currency="THB">90.00</TotalRewardAmount>
          <LoyaltyAccount>
            <LoyaltyProgram>
              <LoyaltyAccountID>Lotuscoinpointaccoun</LoyaltyAccountID>
              <Points Type="Redeemed">90</Points>
            </LoyaltyProgram>
          </LoyaltyAccount>
          <RewardType>Discount</RewardType>
          <PromotionDescription>ส่วนลดแลกคอยน์</PromotionDescription>
          <QualifyingSpent>529.00</QualifyingSpent>
          <TriggerTiming>UponTotal</TriggerTiming>
          <Classification>MultiBuy</Classification>
        </PromotionSummary>
        <PromotionSummary>
          <PromotionID>LoyaltyPointsEarn</PromotionID>
          <RedemptionQuantity>4</RedemptionQuantity>
          <TotalRewardAmount Currency="THB">4.00</TotalRewardAmount>
          <LoyaltyAccount>
            <LoyaltyProgram>
              <LoyaltyAccountID>Lotuscoinpointaccoun</LoyaltyAccountID>
              <Points Type="PointsEarned">4</Points>
            </LoyaltyProgram>
          </LoyaltyAccount>
          <RewardType>Points</RewardType>
          <PromotionDescription>ได้รับคะแนนสมาชิก</PromotionDescription>
          <QualifyingSpent>404.15</QualifyingSpent>
          <TriggerTiming>UponTotal</TriggerTiming>
        </PromotionSummary>
      </PromotionsSummary>
      <RefundablePromotions xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
        <RefundPromotions>H4sIAAAAAAAEAO1XbW/aMBD+K4jvxaEUBsiNxGg3VYOBKJr21UuOYs2xM9sZ5N/PcV54NXQblfoBvsS5x7rnfHe+J+CpFJHQVHDl4ycNkXlMQSqq9AwWCQ8r3MChPxIpYTqdCsq1eiSSY2Ss+LMUSWwWzbaHUfmCh4KHtHC947MCfDxPY/CfY+AhRnadsYwJ5R+J+gk6dz+DXwmVEE54AP6CMAUY7djwUFINkpJ9otxcEZnDhEmgn7bJPM/74LXvWt2c6wukm203W2AGYORy/w+0nV6r2+o6aCvw4rTm1+y2O47TluBb0N7dttpO2hw8TYs2ZR5TTqMkmi8lqKVghgGjAxuuloM4ZhTUXPgDnmZtbmI7xPCQsCBhRMOEs/ST6fwDl0X3nd+IvxGWgOn8EAIaEeY3PRNi+YJRCSPXzTh9Y7SQsJVf+15tuvCt2SfzNkW0UFbC/yhdLe70OWX3dS0TqNfWEeOqH3fu60ut4z5Cq9WqsWo1hHxBt6Y90ffx6DlYQkRuKFeamJPUa+g91DqLwllOtD0NZ7AiMtwfi7m1vEV2xJZZz+MOt30oLSl/2ZmVhQmjI9sP2vFYM04lLECOhdKPazOTFf0NuSYUqXDieEQjqh+oCkTCNYTWOszWWbe4QTwIrNFKi07MDsrj7OTE2s1JKnwvtWWyUJVL5NKtE3o2JemPQs3K+HYVrdfrXULRmlchuwrZK4WskXl592pWRHkVtKugvU7QBlE2XSeLxXlNa/6llDl78U30rGA7IWoz8whN+LOEwVcSgW8ND3l4pmf34bPSZrnIMeHZIGVvA4PAxJOn28JlwsdkbRNjv5XLdda9dnWhrkXO8NDOKZxqjYoKoK1/pn8AquNjM6YOAAA=</RefundPromotions>
      </RefundablePromotions>
      <r10Ex:VenueShift>
        <r10Ex:Description r10Ex:Culture="th-TH">Unknown</r10Ex:Description>
      </r10Ex:VenueShift>
      <r10Ex:Forms />
      <r10Ex:CompanyTaxID>0105536092641</r10Ex:CompanyTaxID>
    </RetailTransaction>
    <BusinessDayDate>2023-12-19</BusinessDayDate>
    <BeginDateTime r10Ex:Offset="07:00:00">2023-12-19T11:42:40.973</BeginDateTime>
    <EndDateTime r10Ex:Offset="07:00:00">2023-12-19T11:44:19.716</EndDateTime>
    <OperatorBypassApproval>
      <SequenceNumber>1</SequenceNumber>
      <ApproverID />
      <Description>PaybyPoints</Description>
      <BusinessRuleManager xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns="http://www.Retalix.com/Extensions">
        <BusinessRule RuleName="PaybyPoints">
          <BusinessAction MessageName="PaybyPoints" InputType="FourLastDigitsOfID" ActionType="LoyaltyMemberValidation" InputValue="0640" IsApproved="Yes" />
        </BusinessRule>
      </BusinessRuleManager>
    </OperatorBypassApproval>
    <FoodServiceTransaction>
      <OrderTime SaleStartType="TakeOut" />
    </FoodServiceTransaction>
    <r10Ex:R10Version>23.3.2.0</r10Ex:R10Version>
  </Transaction>
    </LogDocuments>
</TransactionLogLookupResponse>
    `
}