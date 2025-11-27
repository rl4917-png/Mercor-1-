// ========================================
// Sample Project Data (Hard-coded)
// ========================================
const projects = [
    {
        id: 1,
        title: "Go语言代码基准测试开发",
        company: "某领先AI实验室",
        description: "帮助训练下一代AI系统，通过开发和验证真实世界的Go语言编程基准测试",
        detailedDescription: `我们正在招聘经验丰富的Go工程师，支持与领先AI实验室的各种高影响力研究合作。自由职业者将通过扩展编程基准测试来帮助改进AI系统，这些基准测试反映了跨多种语言和领域的真实世界开发。

这是一个独特的机会，可以将您的工程专业知识应用于塑造下一代智能系统。

核心职责：

• 通过从真实世界的代码仓库中收集问题、解决方案和测试套件，开发和验证Go语言的编程基准测试
• 确保基准测试任务包含全面的单元测试和集成测试，以验证解决方案
• 维护基准测试任务分配的一致性和可扩展性
• 提供关于解决方案质量和清晰度的结构化反馈
• 调试、优化和记录基准测试代码，以确保可靠性和可重复性

理想资格：

• 3-10年后端软件工程师、机器学习工程师或应用数据科学家的经验
• 软件工程、计算机科学或相关领域的学位
• 精通Go语言
• 具有调试、测试和验证代码的经验
• 熟悉技术写作，注重细节

项目时间线：

• 开始日期：即刻
• 持续时间：1个月
• 投入：兼职（每周15-20小时）
• 工作安排：完全远程和异步 - 灵活的工作时间

薪酬与合同：

• 每小时¥630，每个批准的任务还有丰厚的奖金（1个任务大约需要1小时完成）
• 包括奖金在内的平均薪酬中位数为每小时¥1,400
• 独立承包商
• 通过支付平台每日结算

申请与入职流程：

• 上传您的简历
• AI面试：一个简短的15分钟对话，了解您的背景、经验和对该职位的兴趣
• 简短评估，测试真实世界的编码能力、技术深度和调试方法
• 几天内跟进沟通，提供后续步骤和入职详情`,
        pay: "¥630/小时 + 任务奖金",
        duration: "1 个月",
        domains: ["工程"],
        skills: [
            "3-10年后端开发经验",
            "软件工程或计算机科学学位",
            "精通Go语言编程",
            "具备代码调试、测试和验证经验",
            "优秀的技术写作能力和细节关注度"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project1"
    },
    {
        id: 2,
        title: "AI研究助理 - 多学科方向",
        company: "某顶尖AI研究机构",
        description: "为大语言模型研究做出贡献，通过您的学术知识改进特定领域的AI性能",
        detailedDescription: `我们正在寻找积极进取的在读学生（专科、本科、硕士）以及已完成学位的个人，为与顶级AI实验室合作的AI研究计划做出贡献。作为该项目的一部分，您将应用您的学术知识，帮助改进大语言模型（LLM）在特定领域和主题中的性能。

远程且独立地完成短期AI训练项目，无最低小时承诺。

项目详情：

• 该职位是远程和异步的 - 可以在任何地方独立工作
• 灵活的工作时间和远程工作能力，每周大约投入10到20小时。根据项目情况，您每周最多可以工作40小时
• 项目工作包括但不限于开发特定领域的提示词和评估LLM响应
• 在为各个学科的AI变革世界做出贡献的同时，学习新技能
• 项目分配将取决于项目可用性

我们正在寻找的人才：

• 当前正在攻读专科、本科或硕士学位的学生，或已获得学位的人士
• 具有卓越的细节关注能力，能够准确遵循详细说明的个人
• 能够在主要异步的远程环境中与领先的AI研究实验室合作的候选人
• 相信自己的知识和推理技能可以挑战当今最先进AI系统的人

项目承诺：

• 工作方式：完全远程、异步工作
• 时间投入：每周10-20小时，最多可达40小时
• 灵活性：可根据个人时间表安排工作
• 项目周期：短期项目，持续时间根据具体项目而定

薪酬待遇：

• 根据项目复杂度和您的专业背景，时薪范围¥210-¥420
• 按完成的任务量计酬
• 表现优秀者有机会参与更高级别的项目

申请流程：

• 提交您的简历和学历证明
• 完成在线能力评估
• AI辅助面试，评估您的专业知识和沟通能力
• 根据您的专业领域匹配合适的项目`,
        pay: "¥210-¥420/小时",
        duration: "灵活",
        domains: ["教育", "工程"],
        skills: [
            "正在攻读或已完成专科/本科/硕士学位",
            "卓越的细节关注能力",
            "能够遵循详细技术说明",
            "适应异步远程工作环境",
            "具备批判性思维和推理能力"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project2"
    },
    {
        id: 3,
        title: "金融领域AI训练专家",
        company: "某金融科技AI公司",
        description: "帮助训练金融领域的大语言模型，评估和改进AI在复杂金融场景中的表现",
        detailedDescription: `我们正在构建下一代金融领域的AI系统，需要具备深厚金融背景的专业人士加入我们的AI训练团队。您将在塑造AI如何理解和处理复杂金融问题方面发挥关键作用。

项目概述：

本项目专注于提升大语言模型在金融分析、投资决策、风险评估和监管合规等领域的能力。您将与AI研究团队密切合作，为模型提供高质量的金融领域训练数据和评估反馈。

核心职责：

• 开发和评估金融领域特定的AI提示词和测试案例，涵盖投资分析、风险管理、财务规划等场景
• 审查和评估AI生成的金融分析报告、投资建议和风险评估的准确性和合理性
• 为AI模型提供关于金融术语、概念和行业最佳实践的详细反馈
• 识别AI在理解复杂金融产品（如衍生品、结构化产品）时的局限性
• 创建涵盖宏观经济分析、公司估值、投资组合优化等主题的训练数据集
• 确保AI输出符合金融监管要求和行业标准

理想候选人资格：

• 5年以上金融行业工作经验（投资银行、资产管理、风险管理、金融分析等）
• 金融、经济学、会计或相关领域的本科或以上学位；CFA、FRM等专业资格证书优先
• 深入理解金融市场、金融产品和投资策略
• 熟悉财务建模、估值方法和风险管理框架
• 优秀的分析能力和批判性思维能力
• 出色的中英文书面表达能力
• 了解金融监管环境和合规要求

项目时间安排：

• 开始时间：即刻
• 项目周期：3-6个月，表现优秀者可延长
• 工作时间：每周20-30小时（可根据您的时间灵活安排）
• 工作模式：100%远程，异步工作，无需参加固定会议

薪酬与福利：

• 基础时薪：¥560/小时
• 复杂任务奖金：每个高质量金融分析任务额外奖励¥300-¥800
• 预计平均综合薪酬：¥700-¥900/小时
• 独立承包商身份
• 每周结算一次

申请流程：

• 提交简历，突出您的金融行业经验和专业背景
• 完成金融知识评估（约45分钟）
• 与项目经理进行视频面试（30分钟）
• 完成一个样本任务，展示您评估AI金融分析的能力
• 通过后2-3个工作日内收到offer并开始入职`,
        pay: "¥560-¥900/小时",
        duration: "3-6 个月",
        domains: ["金融"],
        skills: [
            "5年以上金融行业经验",
            "金融、经济学相关学位，CFA/FRM优先",
            "深入理解金融市场和产品",
            "熟悉财务建模和估值方法",
            "优秀的中英文书面表达能力",
            "了解金融监管和合规要求"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project3"
    },
    {
        id: 4,
        title: "医疗健康领域AI数据标注专家",
        company: "某医疗AI研发公司",
        description: "利用您的医学背景帮助训练医疗诊断AI，标注和评估临床数据",
        detailedDescription: `我们正在开发用于医疗诊断和临床决策支持的AI系统，需要具备医学专业背景的专家来确保AI模型的准确性和安全性。

项目背景：

随着AI在医疗领域的应用日益广泛，确保AI系统能够准确理解医学知识、正确解读临床数据并提供可靠的诊断建议至关重要。您的医学专业知识将直接影响AI系统的质量和安全性。

工作内容：

• 审核和标注医学影像数据（X光、CT、MRI等），为AI模型提供准确的诊断标签
• 评估AI生成的诊断报告和治疗建议的医学准确性
• 开发医疗场景的测试用例，包括常见疾病、罕见病和复杂病例
• 审查AI对医学文献、临床指南和药物信息的理解和应用
• 提供关于医学术语、解剖学、病理学和治疗方案的详细反馈
• 识别AI可能存在的医学错误或误解，并提出改进建议
• 确保AI输出符合医学伦理和临床实践标准

候选人要求：

• 医学、护理、药学或相关健康科学领域的本科或以上学位
• 3年以上临床工作经验（医生、护士、药剂师、医学检验师等）
• 熟悉临床诊断流程和医疗决策过程
• 了解医学影像判读（如适用于您的专业领域）
• 熟悉医学文献阅读和循证医学原则
• 严谨的科学态度和高度的责任心
• 良好的中英文医学文献阅读能力
• 注重细节，能够发现细微的医学错误

额外加分项：

• 拥有执业医师资格证书
• 有科研或医学教学经验
• 熟悉医疗AI或数字健康领域
• 有医学数据标注或医学知识库构建经验

项目详情：

• 启动时间：滚动招募
• 项目周期：至少3个月，长期合作优先
• 工作强度：每周15-25小时，可灵活安排
• 工作地点：完全远程，可在任何地点工作
• 工作性质：独立完成标注和评估任务，定期提交工作成果

薪酬结构：

• 时薪：¥420-¥630/小时（根据专业背景和资质）
• 复杂病例奖金：高质量的罕见病或复杂病例标注可获得额外¥200-¥500奖励
• 执业医师额外补贴：有执业医师资格的候选人时薪上浮20%
• 付款方式：每两周结算一次

应聘流程：

• 在线提交简历和学历/资质证明
• 完成医学知识测评（多选题 + 病例分析，约60分钟）
• 完成标注样本任务（标注3-5个医学案例）
• 与医学团队负责人面试（45分钟）
• 通过审核后开始培训和正式工作

伦理与隐私承诺：

• 所有医学数据均已去标识化，保护患者隐私
• 标注工作遵守医学伦理原则
• 签署保密协议，确保数据安全`,
        pay: "¥420-¥630/小时",
        duration: "3 个月起",
        domains: ["医疗"],
        skills: [
            "医学、护理、药学相关学位",
            "3年以上临床工作经验",
            "熟悉临床诊断和医疗决策",
            "良好的医学文献阅读能力",
            "严谨负责，注重细节",
            "执业医师资格证书优先"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project4"
    },
    {
        id: 5,
        title: "法律文本分析与AI训练",
        company: "某法律科技AI平台",
        description: "运用法律专业知识训练AI理解法律文本、合同条款和法规要求",
        detailedDescription: `我们正在开发用于法律文档分析、合同审查和法律咨询的AI系统。我们需要经验丰富的法律专业人士帮助训练AI准确理解和应用法律知识。

项目使命：

法律AI的发展需要深厚的法律专业知识作为基础。您的参与将帮助AI更好地理解法律逻辑、识别法律风险、解读复杂条款，最终为用户提供更准确的法律支持。

核心工作任务：

• 审查和标注各类法律文档，包括合同、法律意见书、诉讼文书、法规文件等
• 评估AI对法律条款的解读准确性，识别潜在的法律风险和合规问题
• 开发涵盖公司法、合同法、知识产权法、劳动法等领域的测试案例
• 审核AI生成的法律分析和建议，确保符合现行法律法规
• 为AI提供关于法律推理、判例应用和法律文书写作的反馈
• 创建复杂法律场景的训练数据，例如跨境交易、并购、争议解决等
• 确保AI理解中国法律体系的特点和最新法律法规变化

候选人资格要求：

• 法律专业本科或以上学位（法学学士、法律硕士、JD等）
• 3年以上法律实务经验（律师、企业法务、法律顾问等）
• 深入理解中国法律体系和主要法律领域
• 熟悉法律文书写作和合同起草
• 优秀的法律分析和逻辑推理能力
• 具备法律检索和法律研究能力
• 清晰的法律表达和沟通能力
• 通过国家统一法律职业资格考试（原司法考试）优先

专业领域（优先考虑以下领域之一）：

• 公司法与商事法律
• 合同法与交易法律
• 知识产权法
• 劳动法与雇佣法
• 金融与证券法
• 跨境法律与国际贸易
• 合规与监管法律

项目安排：

• 项目开始：即刻
• 合作周期：初期3个月，可根据表现延长至长期合作
• 工作时间：每周15-30小时（可根据您的时间表灵活调整）
• 工作方式：完全远程，异步工作，无需出席会议
• 工作设备：使用您自己的电脑，我们提供必要的软件工具

薪酬与激励：

• 基础时薪：¥490-¥700/小时（基于经验和专业领域）
• 复杂案例奖金：高质量的复杂法律分析可获¥400-¥1000额外奖励
• 律师执业证额外补贴：持有律师执业证的候选人基础时薪增加15%
• 特定专业领域补贴：稀缺领域（如跨境法律、知识产权诉讼）额外补贴10-20%
• 预计综合时薪：¥600-¥1000/小时
• 结算周期：每月两次

招聘与入职：

• 提交简历和法律职业资格证明
• 完成法律知识评估（案例分析 + 法律文书审查，约60-90分钟）
• 提交一份样本工作：审查一份合同并标注关键法律问题
• 与法律团队负责人进行视频面试（30-45分钟）
• 通过所有评估后，3个工作日内发放offer并开始入职培训

保密与职业操守：

• 严格遵守律师职业道德和保密义务
• 所有法律文档均经过脱敏处理
• 签署保密协议和利益冲突声明
• 不涉及现实中正在进行的诉讼或争议`,
        pay: "¥490-¥1000/小时",
        duration: "3 个月起",
        domains: ["法律"],
        skills: [
            "法律专业本科以上学位",
            "3年以上法律实务经验",
            "深入理解中国法律体系",
            "熟悉法律文书和合同起草",
            "优秀的法律分析能力",
            "通过法律职业资格考试优先"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project5"
    },
    {
        id: 6,
        title: "Python编程基准测试开发",
        company: "某AI研究实验室",
        description: "开发Python编程挑战和测试用例，帮助评估和提升AI的编程能力",
        detailedDescription: `我们正在构建全面的编程基准测试库，以评估和改进AI模型的代码生成和问题解决能力。我们需要资深Python开发者创建高质量的编程挑战。

项目简介：

本项目旨在创建一个涵盖各种难度和场景的Python编程基准测试集，用于训练和评估AI的编程能力。这些基准测试将反映真实世界的编程挑战，而不是简单的算法题。

主要职责：

• 从开源项目和真实代码库中提取和改编编程问题
• 设计涵盖数据处理、Web开发、自动化脚本、API集成等场景的编程任务
• 为每个编程问题编写详细的问题描述、输入输出规范和评分标准
• 开发全面的测试用例，包括边界情况、异常处理和性能测试
• 为每个问题提供至少一个参考解决方案，并附带详细注释
• 审查和验证其他贡献者创建的编程基准测试
• 确保问题的多样性，涵盖不同的Python库和编程范式
• 维护基准测试的文档和元数据

技能要求：

• 5年以上Python开发经验，有扎实的编程基础
• 计算机科学、软件工程或相关专业本科以上学位
• 深入理解Python生态系统和常用库（如NumPy、Pandas、Flask、Django、asyncio等）
• 熟练编写单元测试和集成测试
• 有开源项目贡献经验优先
• 熟悉算法和数据结构
• 优秀的技术文档写作能力
• 了解软件工程最佳实践和代码质量标准

理想候选人特征：

• 喜欢解决编程难题和挑战
• 注重代码质量和可读性
• 能够从实际应用场景中抽象出编程问题
• 善于识别代码中的边界情况和潜在bug
• 对AI和机器学习有一定了解或兴趣

工作详情：

• 开始时间：随时可以开始
• 项目周期：至少2个月
• 工作负荷：每周10-20小时
• 目标产出：每周至少完成3-5个高质量编程基准测试
• 工作模式：完全远程，自主安排工作时间
• 协作方式：通过项目管理平台提交任务，定期同步进展

薪酬待遇：

• 时薪：¥560/小时
• 任务奖金：每个通过质量审核的基准测试额外奖励¥350-¥700（取决于复杂度）
• 高质量贡献者奖金：月度表现优秀者可获得¥2000-¥5000额外奖励
• 预计平均时薪（含奖金）：¥700-¥900/小时
• 独立承包商
• 每周结算

申请步骤：

• 提交简历，突出您的Python项目经验
• 完成编程能力评估（约90分钟，包含3个编程题）
• 提交一个样本基准测试：设计一个完整的编程挑战，包含问题描述、测试用例和参考答案
• 技术面试（45分钟）：讨论您的编程经验和对AI编程能力的看法
• 审核通过后1-2天内开始工作

工作示例：

一个合格的基准测试包括：
1. 清晰的问题描述（真实场景）
2. 详细的输入输出规范
3. 至少10个测试用例（覆盖正常、边界、异常情况）
4. 一个高质量的参考解决方案
5. 时间和空间复杂度分析
6. 相关的技术背景说明`,
        pay: "¥560-¥900/小时",
        duration: "2 个月起",
        domains: ["工程"],
        skills: [
            "5年以上Python开发经验",
            "计算机科学相关学位",
            "深入理解Python生态系统",
            "熟练编写测试用例",
            "有开源贡献经验优先",
            "优秀的技术文档能力"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project6"
    },
    {
        id: 7,
        title: "多语言对话数据标注",
        company: "某跨国AI科技公司",
        description: "标注和评估AI对话系统的多语言响应质量，改进跨语言理解能力",
        detailedDescription: `我们正在开发支持多语言的AI对话系统，需要精通中英文的语言专家帮助评估和改进AI的跨语言对话能力。

项目目标：

构建高质量的多语言对话数据集，帮助AI更好地理解和生成中文和英文对话，特别是在文化背景、语言习惯和表达方式方面。

工作内容：

• 评估AI生成的中英文对话的自然度、准确性和文化适应性
• 标注对话中的语言错误、逻辑问题和文化不当表达
• 创建涵盖日常对话、专业咨询、客户服务等场景的对话数据
• 评估AI在中英文转换和双语对话中的表现
• 提供关于语言风格、语气、礼貌程度的反馈
• 识别AI的文化误解或语言偏见
• 为不同场景开发对话评估标准

候选人要求：

• 中英文双语能力接近母语水平
• 语言学、翻译、对外汉语教学或相关专业背景优先
• 对中西方文化差异有深入理解
• 敏感的语言感知能力，能识别细微的语言差异
• 优秀的书面表达能力
• 注重细节，有耐心
• 有语言教学、翻译或本地化经验优先

项目安排：

• 开始时间：即刻
• 项目长度：至少1个月，可长期合作
• 工作时间：每周10-30小时，灵活安排
• 工作方式：100%远程，异步工作

薪酬：

• ¥280-¥420/小时（根据语言能力和经验）
• 高质量标注奖金
• 每周结算

申请流程：

• 提交简历和语言能力证明
• 完成双语能力测试（约45分钟）
• 完成样本标注任务
• 简短面试
• 通过后即可开始工作`,
        pay: "¥280-¥420/小时",
        duration: "1 个月起",
        domains: ["教育"],
        skills: [
            "中英文双语接近母语水平",
            "语言学、翻译相关背景优先",
            "深入理解中西方文化差异",
            "敏感的语言感知能力",
            "优秀的书面表达能力",
            "有语言教学或翻译经验优先"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project7"
    },
    {
        id: 8,
        title: "运营策略AI训练专家",
        company: "某商业咨询AI平台",
        description: "利用运营管理经验训练AI理解商业策略、流程优化和运营决策",
        detailedDescription: `我们正在开发用于商业咨询和运营优化的AI系统，需要有丰富运营管理经验的专业人士参与AI训练。

项目概述：

帮助AI理解和分析真实的商业运营场景，包括供应链管理、流程优化、项目管理、业务分析等。您的运营经验将直接影响AI的商业判断力。

主要工作：

• 开发涵盖供应链、项目管理、流程优化等主题的商业案例
• 评估AI对运营问题的分析和解决方案的合理性
• 提供关于运营指标、KPI和业务逻辑的反馈
• 审查AI生成的运营报告、流程图和优化建议
• 创建不同行业和规模的运营场景数据
• 评估AI在资源分配、风险评估、决策支持方面的能力

资格要求：

• 5年以上运营管理、项目管理或商业分析经验
• 工商管理、运营管理或相关专业学位，MBA优先
• 熟悉运营管理框架和方法论（如精益管理、六西格玛、敏捷等）
• 有供应链、项目管理、流程优化等实际项目经验
• 优秀的商业分析和问题解决能力
• 良好的数据分析能力
• 清晰的逻辑思维和表达能力

项目详情：

• 启动时间：随时
• 项目周期：2-4个月
• 工作负荷：每周15-25小时
• 工作地点：完全远程
• 工作性质：独立完成评估任务

薪酬：

• 时薪：¥420-¥630/小时
• 复杂案例分析奖金：¥300-¥600/案例
• MBA或高级管理经验额外补贴
• 预计综合时薪：¥550-¥800/小时
• 每两周结算

申请流程：

• 提交简历，重点描述运营管理经验
• 完成商业分析测评（案例分析，约60分钟）
• 提交样本工作：分析一个运营场景并提供优化建议
• 面试（30-45分钟）
• 审核通过后开始入职

理想候选人背景：

• 曾在制造业、零售、电商、物流等行业担任运营或管理职位
• 有实际的流程改进、成本优化、项目管理成功案例
• 熟悉ERP、项目管理工具和数据分析工具
• 对新技术在运营中的应用有兴趣和了解`,
        pay: "¥420-¥800/小时",
        duration: "2-4 个月",
        domains: ["运营"],
        skills: [
            "5年以上运营管理经验",
            "工商管理相关学位，MBA优先",
            "熟悉运营管理方法论",
            "有流程优化项目经验",
            "优秀的商业分析能力",
            "良好的数据分析能力"
        ],
        workMode: "远程",
        applyLink: "https://example.com/apply/project8"
    }
];

// ========================================
// Navigation Logic
// ========================================
const navBtns = document.querySelectorAll('.nav-btn');
const viewSections = document.querySelectorAll('.view-section');

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetView = btn.getAttribute('data-view');

        // Update active nav button
        navBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update active view section
        viewSections.forEach(section => {
            section.classList.remove('active');
        });
        document.getElementById(targetView).classList.add('active');
    });
});

// ========================================
// Project Marketplace Logic
// ========================================

// Render all projects
function renderProjects(projectsToRender) {
    const projectsGrid = document.getElementById('projectsGrid');
    projectsGrid.innerHTML = '';

    if (projectsToRender.length === 0) {
        projectsGrid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 2rem;">没有找到匹配的项目</p>';
        return;
    }

    projectsToRender.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const domainsHTML = project.domains.map(domain =>
            `<span class="domain-tag">${domain}</span>`
        ).join('');

        card.innerHTML = `
            <h3>${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-meta">
                <div class="meta-item">
                    <span class="meta-label">报酬：</span>
                    <span class="project-pay">${project.pay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">周期：</span>
                    <span>${project.duration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">工作形式：</span>
                    <span>${project.workMode}</span>
                </div>
            </div>
            <div class="project-domains">${domainsHTML}</div>
            <button class="btn-details" data-project-id="${project.id}">查看详情</button>
        `;

        projectsGrid.appendChild(card);
    });

    // Attach event listeners to detail buttons
    document.querySelectorAll('.btn-details').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const projectId = parseInt(btn.getAttribute('data-project-id'));
            openProjectModal(projectId);
        });
    });
}

// Initial render
renderProjects(projects);

// Search and filter logic
const searchInput = document.getElementById('searchInput');
const domainFilter = document.getElementById('domainFilter');

function filterProjects() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedDomain = domainFilter.value;

    const filtered = projects.filter(project => {
        const matchesSearch =
            project.title.toLowerCase().includes(searchTerm) ||
            project.company.toLowerCase().includes(searchTerm) ||
            project.domains.some(d => d.toLowerCase().includes(searchTerm));

        const matchesDomain =
            selectedDomain === '' ||
            project.domains.includes(selectedDomain);

        return matchesSearch && matchesDomain;
    });

    renderProjects(filtered);
}

searchInput.addEventListener('input', filterProjects);
domainFilter.addEventListener('change', filterProjects);

// ========================================
// Project Detail Modal Logic
// ========================================
const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const modalBody = document.getElementById('modalBody');

function openProjectModal(projectId) {
    const project = projects.find(p => p.id === projectId);
    if (!project) return;

    const domainsHTML = project.domains.map(domain =>
        `<span class="domain-tag">${domain}</span>`
    ).join('');

    const skillsHTML = project.skills.map(skill =>
        `<li>${skill}</li>`
    ).join('');

    modalBody.innerHTML = `
        <div class="modal-header">
            <h2>${project.title}</h2>
            <p style="color: #64748b; margin-top: 0.5rem;">${project.company}</p>
        </div>

        <div class="modal-section">
            <div class="project-meta" style="margin-bottom: 1rem;">
                <div class="meta-item">
                    <span class="meta-label">报酬：</span>
                    <span class="project-pay">${project.pay}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">预计周期：</span>
                    <span>${project.duration}</span>
                </div>
                <div class="meta-item">
                    <span class="meta-label">工作形式：</span>
                    <span>${project.workMode}</span>
                </div>
            </div>
            <div class="project-domains">${domainsHTML}</div>
        </div>

        <div class="modal-section">
            <h3>项目详情</h3>
            <p style="white-space: pre-wrap;">${project.detailedDescription}</p>
        </div>

        <div class="modal-section">
            <h3>所需技能</h3>
            <ul>${skillsHTML}</ul>
        </div>

        <button class="btn-apply" onclick="window.open('${project.applyLink}', '_blank')">
            前往申请链接
        </button>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking overlay
document.querySelector('.modal-overlay').addEventListener('click', closeModal);

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});

// ========================================
// Profile Form Logic
// ========================================
const saveProfileBtn = document.getElementById('saveProfileBtn');
const successBanner = document.getElementById('successBanner');

// Update profile preview in real-time
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const cityInput = document.getElementById('cityInput');
const domainCheckboxes = document.querySelectorAll('.domain-chips input[type="checkbox"]');

function updateProfilePreview() {
    document.getElementById('previewName').textContent = nameInput.value || '未填写';
    document.getElementById('previewEmail').textContent = emailInput.value || '未填写';
    document.getElementById('previewCity').textContent = cityInput.value || '未填写';

    const selectedDomains = Array.from(domainCheckboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    document.getElementById('previewDomains').textContent =
        selectedDomains.length > 0 ? selectedDomains.join(', ') : '未选择';
}

// Attach event listeners
nameInput.addEventListener('input', updateProfilePreview);
emailInput.addEventListener('input', updateProfilePreview);
cityInput.addEventListener('input', updateProfilePreview);
domainCheckboxes.forEach(cb => {
    cb.addEventListener('change', updateProfilePreview);
});

// Save profile button
saveProfileBtn.addEventListener('click', () => {
    // Show success banner
    successBanner.classList.remove('hidden');

    // Hide banner after 3 seconds
    setTimeout(() => {
        successBanner.classList.add('hidden');
    }, 3000);

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ========================================
// File Upload Logic (Fake)
// ========================================
const resumeUpload = document.getElementById('resumeUpload');
const uploadedFiles = document.getElementById('uploadedFiles');

resumeUpload.addEventListener('change', (e) => {
    const files = e.target.files;

    if (files.length > 0) {
        const file = files[0];

        // Create file item element
        const fileItem = document.createElement('div');
        fileItem.className = 'file-item';
        fileItem.innerHTML = `
            <span class="file-name">📄 ${file.name}</span>
            <span class="file-badge">仅示意</span>
        `;

        uploadedFiles.appendChild(fileItem);

        // Reset input so the same file can be selected again
        resumeUpload.value = '';
    }
});

// ========================================
// Initialize on page load
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initial profile preview update
    updateProfilePreview();

    console.log('中国人才市场平台已加载');
    console.log('这是一个纯前端演示原型，所有数据都是硬编码的示例数据');
});
