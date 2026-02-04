// ==========================================
// Customer Portal - AI Labor Market
// State Management & Interactivity
// ==========================================

// ==========================================
// DATA MODELS & MOCK DATA
// ==========================================

// Status flow mapping based on the state diagram
const STATUS_FLOW = {
    'submitted': { label: 'Submitted', next: 'discovery' },
    'discovery': { label: 'Discovery', next: 'shortlisted' },
    'shortlisted': { label: 'Shortlisted', next: 'intro' },
    'intro': { label: 'Introduction', next: 'meeting' },
    'meeting': { label: 'Meeting', next: 'decision' },
    'decision': { label: 'Decision', next: 'success' },
    'success': { label: 'Cooperation Started', next: null },
    'closed': { label: 'Closed', next: null },
    'failed': { label: 'Failed', next: null },
    'paused': { label: 'Paused', next: null }
};

// Mock needs data
let needs = [
    {
        id: 'NEED-001',
        domain_area: 'ai-ml',
        task_type: 'evaluation',
        task_description: 'We need domain experts to evaluate our medical AI model responses for accuracy and safety. Looking for healthcare professionals with experience in clinical decision-making.',
        expert_count: 3,
        intensity_hours_per_week: '10-20',
        start_date: '2024-02-15',
        duration: '1-3-months',
        budget_range: '100-150',
        language_requirement: 'english-fluent',
        must_have: 'MD or equivalent, 5+ years clinical experience',
        nice_to_have: 'Experience with AI/ML evaluation',
        status: 'shortlisted',
        created_at: '2024-01-20T10:30:00Z',
        updated_at: '2024-02-01T14:22:00Z',
        round_index: 1,
        admin_summary: 'Client seeks 3 medical domain experts for AI model evaluation. Key requirements: clinical background, English fluency, 10-20 hrs/week availability.',
        shortlist: [
            {
                id: 'EXP-101',
                name: 'Dr. Sarah Chen',
                initials: 'SC',
                title: 'Clinical Researcher',
                match_score: 95,
                domain_tags: ['Medical', 'Clinical AI', 'Healthcare'],
                summary: '15 years of clinical experience in internal medicine. Previously consulted for 3 AI healthcare startups.',
                english_level: 'Native',
                rate_range: '$120-150/hr',
                availability: '15 hrs/week',
                status: 'shortlisted'
            },
            {
                id: 'EXP-102',
                name: 'Dr. Michael Wang',
                initials: 'MW',
                title: 'Emergency Medicine Physician',
                match_score: 88,
                domain_tags: ['Medical', 'Emergency Care', 'Diagnostics'],
                summary: '10 years ER experience. Strong interest in AI-assisted diagnostics.',
                english_level: 'Fluent',
                rate_range: '$100-130/hr',
                availability: '10 hrs/week',
                status: 'shortlisted'
            },
            {
                id: 'EXP-103',
                name: 'Dr. Emily Johnson',
                initials: 'EJ',
                title: 'Radiologist',
                match_score: 82,
                domain_tags: ['Medical', 'Radiology', 'Imaging'],
                summary: '8 years in diagnostic radiology. Experience evaluating AI imaging tools.',
                english_level: 'Native',
                rate_range: '$130-160/hr',
                availability: '12 hrs/week',
                status: 'shortlisted'
            }
        ]
    },
    {
        id: 'NEED-002',
        domain_area: 'legal',
        task_type: 'review',
        task_description: 'Looking for legal experts to review and annotate contract clauses for our contract analysis AI. Need expertise in corporate law and contract drafting.',
        expert_count: 2,
        intensity_hours_per_week: '5-10',
        start_date: '2024-02-01',
        duration: '2-4-weeks',
        budget_range: '150-200',
        language_requirement: 'bilingual',
        must_have: 'JD, corporate law experience',
        status: 'discovery',
        created_at: '2024-01-25T09:15:00Z',
        updated_at: '2024-01-28T11:45:00Z',
        round_index: 1,
        admin_summary: 'Client needs 2 legal experts for contract clause annotation. Must be bilingual with corporate law background.'
    },
    {
        id: 'NEED-003',
        domain_area: 'finance',
        task_type: 'consulting',
        task_description: 'Need financial analysts to provide expert consultation on our trading algorithm outputs and help identify potential issues.',
        expert_count: 1,
        intensity_hours_per_week: '20-40',
        start_date: '2024-03-01',
        duration: '3-6-months',
        budget_range: '200-300',
        language_requirement: 'english-native',
        must_have: 'CFA, 10+ years quantitative finance',
        status: 'intro',
        created_at: '2024-01-15T16:00:00Z',
        updated_at: '2024-02-02T09:30:00Z',
        round_index: 1,
        shortlist: [
            {
                id: 'EXP-201',
                name: 'James Rodriguez',
                initials: 'JR',
                title: 'Quantitative Analyst',
                match_score: 92,
                domain_tags: ['Finance', 'Quant', 'Trading'],
                summary: '12 years at top hedge funds. CFA charterholder.',
                english_level: 'Native',
                rate_range: '$200-250/hr',
                availability: '30 hrs/week',
                status: 'intro_sent'
            }
        ],
        matches: [
            {
                expert_id: 'EXP-201',
                expert_name: 'James Rodriguez',
                status: 'scheduling',
                intro_sent_at: '2024-02-02T09:30:00Z'
            }
        ]
    },
    {
        id: 'NEED-004',
        domain_area: 'engineering',
        task_type: 'redteam',
        task_description: 'Red team testing for our autonomous vehicle perception system. Need experts in computer vision and safety-critical systems.',
        expert_count: 4,
        intensity_hours_per_week: '10-20',
        start_date: '2024-02-20',
        duration: '1-3-months',
        budget_range: '150-200',
        language_requirement: 'english-fluent',
        must_have: 'PhD in CS/EE, perception systems experience',
        status: 'submitted',
        created_at: '2024-02-03T08:00:00Z',
        updated_at: '2024-02-03T08:00:00Z',
        round_index: 1
    },
    {
        id: 'NEED-005',
        domain_area: 'medical',
        task_type: 'training',
        task_description: 'Create training data for medical symptom checker. Need doctors to provide example diagnoses and reasoning.',
        expert_count: 5,
        intensity_hours_per_week: '5-10',
        start_date: '2024-01-10',
        duration: '2-4-weeks',
        budget_range: '100-150',
        language_requirement: 'chinese-native',
        must_have: 'Licensed physician in China',
        status: 'success',
        created_at: '2024-01-05T12:00:00Z',
        updated_at: '2024-02-01T18:00:00Z',
        closed_at: '2024-02-01T18:00:00Z',
        close_type: 'success',
        round_index: 1
    },
    {
        id: 'NEED-006',
        domain_area: 'education',
        task_type: 'writing',
        task_description: 'Content writers needed for educational AI tutor. Must be experienced teachers in K-12 mathematics.',
        expert_count: 3,
        intensity_hours_per_week: '10-20',
        start_date: '2024-01-20',
        duration: '1-3-months',
        budget_range: '50-100',
        language_requirement: 'english-fluent',
        must_have: 'Teaching certification, 5+ years experience',
        status: 'meeting',
        created_at: '2024-01-10T14:30:00Z',
        updated_at: '2024-02-04T10:00:00Z',
        round_index: 1,
        matches: [
            {
                expert_id: 'EXP-301',
                expert_name: 'Lisa Thompson',
                status: 'meeting_scheduled',
                meeting_time: '2024-02-06T15:00:00Z',
                intro_sent_at: '2024-01-25T09:00:00Z',
                meeting_scheduled_at: '2024-02-01T14:00:00Z'
            }
        ]
    }
];

// Activity log
const activityLog = [
    { type: 'shortlist', icon: '👥', text: 'New shortlist received for "Medical AI Evaluation"', time: '2 hours ago', needId: 'NEED-001' },
    { type: 'meeting', icon: '📅', text: 'Meeting scheduled with Lisa Thompson', time: '5 hours ago', needId: 'NEED-006' },
    { type: 'intro', icon: '🤝', text: 'Introduction sent to James Rodriguez', time: '1 day ago', needId: 'NEED-003' },
    { type: 'discovery', icon: '📝', text: 'Admin requested clarification for "Contract Analysis"', time: '2 days ago', needId: 'NEED-002' },
    { type: 'success', icon: '✅', text: '"Medical Symptom Training" completed successfully', time: '3 days ago', needId: 'NEED-005' }
];

// Current state
let currentView = 'dashboard';
let currentNeedId = null;
let currentCandidateId = null;
let currentMatchId = null;
let meetingsTabActive = 'pending-intro';

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initForms();
    initModals();
    initTabs();
    renderDashboard();
    renderNeedsList();
    renderShortlists();
    renderMeetings();
    setDefaultDate();
});

function initNavigation() {
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const view = item.dataset.view;
            showView(view);
        });
    });
}

function initForms() {
    const needForm = document.getElementById('need-form');
    if (needForm) {
        needForm.addEventListener('submit', handleNeedSubmit);
    }

    // Discovery response radio buttons
    const discoveryRadios = document.querySelectorAll('input[name="discovery-response"]');
    discoveryRadios.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const modSection = document.getElementById('modification-section');
            if (e.target.value === 'modify') {
                modSection.classList.remove('hidden');
            } else {
                modSection.classList.add('hidden');
            }
        });
    });

    // Close type change
    const closeType = document.getElementById('close-type');
    if (closeType) {
        closeType.addEventListener('change', (e) => {
            const failSection = document.getElementById('fail-reason-section');
            if (e.target.value === 'fail') {
                failSection.classList.remove('hidden');
            } else {
                failSection.classList.add('hidden');
            }
        });
    }
}

function initModals() {
    // Close modal when clicking outside
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal.id);
            }
        });
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal.active').forEach(modal => {
                closeModal(modal.id);
            });
        }
    });
}

function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            meetingsTabActive = btn.dataset.tab;
            renderMeetings();
        });
    });
}

function setDefaultDate() {
    const startDateInput = document.getElementById('start-date');
    if (startDateInput) {
        const today = new Date();
        today.setDate(today.getDate() + 7); // Default to 1 week from now
        startDateInput.valueAsDate = today;
    }
}

// ==========================================
// VIEW MANAGEMENT
// ==========================================

function showView(viewName) {
    // Update nav
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.toggle('active', item.dataset.view === viewName);
    });

    // Update views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const targetView = document.getElementById(`${viewName}-view`);
    if (targetView) {
        targetView.classList.add('active');
    }

    currentView = viewName;

    // Refresh content
    if (viewName === 'dashboard') renderDashboard();
    if (viewName === 'my-needs') renderNeedsList();
    if (viewName === 'shortlists') renderShortlists();
    if (viewName === 'meetings') renderMeetings();
}

// ==========================================
// DASHBOARD
// ==========================================

function renderDashboard() {
    // Update stats
    const activeNeeds = needs.filter(n => !['success', 'closed', 'failed', 'paused'].includes(n.status)).length;
    const matchedNeeds = needs.filter(n => n.status === 'success').length;
    const pendingNeeds = needs.filter(n => ['submitted', 'discovery'].includes(n.status)).length;
    const upcomingMeetings = needs.filter(n => n.matches?.some(m => m.status === 'meeting_scheduled')).length;

    document.getElementById('stat-active').textContent = activeNeeds;
    document.getElementById('stat-matched').textContent = matchedNeeds;
    document.getElementById('stat-pending').textContent = pendingNeeds;
    document.getElementById('stat-meetings').textContent = upcomingMeetings;

    // Update pipeline
    document.getElementById('pipeline-submitted').textContent = needs.filter(n => n.status === 'submitted').length;
    document.getElementById('pipeline-discovery').textContent = needs.filter(n => n.status === 'discovery').length;
    document.getElementById('pipeline-shortlisted').textContent = needs.filter(n => n.status === 'shortlisted').length;
    document.getElementById('pipeline-intro').textContent = needs.filter(n => n.status === 'intro').length;
    document.getElementById('pipeline-meeting').textContent = needs.filter(n => ['meeting', 'decision'].includes(n.status)).length;
    document.getElementById('pipeline-success').textContent = needs.filter(n => n.status === 'success').length;

    // Render activity list
    const activityList = document.getElementById('activity-list');
    activityList.innerHTML = activityLog.slice(0, 5).map(activity => `
        <div class="activity-item" onclick="viewNeed('${activity.needId}')">
            <div class="activity-icon" style="background: ${getActivityColor(activity.type)}">${activity.icon}</div>
            <div class="activity-content">
                <div class="activity-text">${activity.text}</div>
                <div class="activity-time">${activity.time}</div>
            </div>
        </div>
    `).join('');

    // Render action items
    const actionItems = document.getElementById('action-items');
    const actionableNeeds = needs.filter(n => ['discovery', 'shortlisted'].includes(n.status));

    if (actionableNeeds.length === 0) {
        actionItems.innerHTML = '<div class="empty-state"><p>No actions required at this time</p></div>';
    } else {
        actionItems.innerHTML = actionableNeeds.slice(0, 3).map(need => `
            <div class="action-item" onclick="${need.status === 'discovery' ? `openDiscoveryModal('${need.id}')` : `viewShortlist('${need.id}')`}">
                <div class="action-item-content">
                    <div class="action-item-title">${getActionTitle(need)}</div>
                    <div class="action-item-desc">${need.id} - ${getDomainLabel(need.domain_area)}</div>
                </div>
                <button class="btn btn-sm btn-primary">Take Action</button>
            </div>
        `).join('');
    }
}

function getActivityColor(type) {
    const colors = {
        shortlist: 'var(--purple-light)',
        meeting: 'var(--primary-light)',
        intro: '#cffafe',
        discovery: 'var(--warning-light)',
        success: 'var(--success-light)',
        closed: 'var(--bg-tertiary)'
    };
    return colors[type] || 'var(--bg-tertiary)';
}

function getActionTitle(need) {
    if (need.status === 'discovery') {
        return 'Review & Confirm Requirement Summary';
    }
    if (need.status === 'shortlisted') {
        return 'Review Candidate Shortlist';
    }
    return 'Action Required';
}

// ==========================================
// NEEDS LIST (C5 - Status Tracking)
// ==========================================

function renderNeedsList() {
    const container = document.getElementById('needs-list');
    const filterValue = document.getElementById('needs-status-filter')?.value || 'all';

    let filteredNeeds = needs;
    if (filterValue !== 'all') {
        filteredNeeds = needs.filter(n => n.status === filterValue);
    }

    if (filteredNeeds.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">📋</div>
                <div class="empty-state-title">No needs found</div>
                <div class="empty-state-desc">Submit a new need to get started</div>
                <button class="btn btn-primary" onclick="showView('submit-need')">Submit New Need</button>
            </div>
        `;
        return;
    }

    container.innerHTML = filteredNeeds.map(need => `
        <div class="need-card">
            <div class="need-card-header">
                <div>
                    <div class="need-card-title">${getTaskTypeLabel(need.task_type)} - ${getDomainLabel(need.domain_area)}</div>
                    <div class="need-card-id">${need.id} ${need.round_index > 1 ? `<span class="round-badge">Round ${need.round_index}</span>` : ''}</div>
                </div>
                <span class="status-badge ${need.status}">
                    <span class="status-dot"></span>
                    ${STATUS_FLOW[need.status]?.label || need.status}
                </span>
            </div>
            <div class="need-card-body">
                <div class="need-card-description">${need.task_description}</div>
                <div class="need-card-meta">
                    <div class="meta-item">
                        <span class="meta-icon">👥</span>
                        <span>${need.expert_count} expert${need.expert_count > 1 ? 's' : ''}</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">⏱️</span>
                        <span>${need.intensity_hours_per_week} hrs/week</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">💰</span>
                        <span>$${need.budget_range}/hr</span>
                    </div>
                    <div class="meta-item">
                        <span class="meta-icon">📅</span>
                        <span>${getDurationLabel(need.duration)}</span>
                    </div>
                </div>
            </div>
            <div class="need-card-footer">
                <div class="need-status">
                    <span class="text-muted">Updated ${formatTimeAgo(need.updated_at)}</span>
                </div>
                <div class="need-actions">
                    ${getNeedActions(need)}
                </div>
            </div>
        </div>
    `).join('');

    // Add filter change listener
    const statusFilter = document.getElementById('needs-status-filter');
    if (statusFilter && !statusFilter.hasListener) {
        statusFilter.addEventListener('change', renderNeedsList);
        statusFilter.hasListener = true;
    }
}

function getNeedActions(need) {
    let actions = `<button class="btn btn-sm btn-secondary" onclick="viewNeedDetail('${need.id}')">View Details</button>`;

    switch (need.status) {
        case 'discovery':
            actions += `<button class="btn btn-sm btn-primary" onclick="openDiscoveryModal('${need.id}')">Review Summary</button>`;
            break;
        case 'shortlisted':
            actions += `<button class="btn btn-sm btn-primary" onclick="viewShortlist('${need.id}')">View Candidates</button>`;
            break;
        case 'intro':
        case 'meeting':
        case 'decision':
            actions += `<button class="btn btn-sm btn-primary" onclick="showView('meetings')">View Progress</button>`;
            break;
    }

    if (!['success', 'closed', 'failed', 'paused'].includes(need.status)) {
        actions += `<button class="btn btn-sm btn-outline" onclick="openCloseModal('${need.id}')">Close</button>`;
    }

    return actions;
}

// ==========================================
// NEED SUBMISSION (C1)
// ==========================================

function handleNeedSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newNeed = {
        id: `NEED-${String(needs.length + 1).padStart(3, '0')}`,
        domain_area: formData.get('domain_area'),
        task_type: formData.get('task_type'),
        task_description: formData.get('task_description'),
        expert_count: parseInt(formData.get('expert_count')),
        intensity_hours_per_week: formData.get('intensity_hours_per_week'),
        start_date: formData.get('start_date'),
        duration: formData.get('duration'),
        budget_range: formData.get('budget_range'),
        language_requirement: formData.get('language_requirement'),
        must_have: formData.get('must_have'),
        nice_to_have: formData.get('nice_to_have'),
        forbidden: formData.get('forbidden'),
        customer_company_stage: formData.get('customer_company_stage'),
        stakeholder_role: formData.get('stakeholder_role'),
        compliance_constraints: formData.get('compliance_constraints'),
        status: 'submitted',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        round_index: 1
    };

    needs.unshift(newNeed);

    // Add to activity log
    activityLog.unshift({
        type: 'submitted',
        icon: '📝',
        text: `New need submitted: "${getTaskTypeLabel(newNeed.task_type)} - ${getDomainLabel(newNeed.domain_area)}"`,
        time: 'Just now',
        needId: newNeed.id
    });

    showToast('Need submitted successfully! Our team will review it shortly.');
    e.target.reset();
    setDefaultDate();
    showView('my-needs');
}

function saveDraft() {
    showToast('Draft saved');
}

// ==========================================
// DISCOVERY / CLARIFICATION (C2)
// ==========================================

function openDiscoveryModal(needId) {
    const need = needs.find(n => n.id === needId);
    if (!need) return;

    currentNeedId = needId;

    const summaryContent = document.getElementById('admin-summary-content');
    summaryContent.innerHTML = need.admin_summary || 'Summary pending from admin...';

    // Reset form
    document.querySelectorAll('input[name="discovery-response"]').forEach(r => r.checked = false);
    document.getElementById('modification-section').classList.add('hidden');
    document.getElementById('modifications').value = '';

    openModal('discovery-modal');
}

function submitDiscoveryResponse() {
    const response = document.querySelector('input[name="discovery-response"]:checked');
    if (!response) {
        showToast('Please select a response option');
        return;
    }

    const need = needs.find(n => n.id === currentNeedId);
    if (!need) return;

    if (response.value === 'confirm') {
        // Move to shortlisted status (waiting for admin to create shortlist)
        need.status = 'shortlisted';
        need.updated_at = new Date().toISOString();

        activityLog.unshift({
            type: 'confirmed',
            icon: '✓',
            text: `Requirement summary confirmed for "${need.id}"`,
            time: 'Just now',
            needId: need.id
        });

        showToast('Summary confirmed! Waiting for candidate shortlist.');
    } else {
        // Submit modifications
        const modifications = document.getElementById('modifications').value;
        need.customer_modifications = modifications;
        need.updated_at = new Date().toISOString();

        activityLog.unshift({
            type: 'modified',
            icon: '📝',
            text: `Modifications submitted for "${need.id}"`,
            time: 'Just now',
            needId: need.id
        });

        showToast('Modifications submitted. Admin will review and update.');
    }

    closeModal('discovery-modal');
    renderDashboard();
    renderNeedsList();
}

// ==========================================
// SHORTLISTS (C3)
// ==========================================

function renderShortlists() {
    const container = document.getElementById('shortlist-container');
    const shortlistedNeeds = needs.filter(n => n.status === 'shortlisted' && n.shortlist?.length > 0);

    if (shortlistedNeeds.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-icon">👥</div>
                <div class="empty-state-title">No shortlists available</div>
                <div class="empty-state-desc">Shortlists will appear here when your needs are matched with candidates</div>
            </div>
        `;
        return;
    }

    container.innerHTML = shortlistedNeeds.map(need => `
        <div class="shortlist-card">
            <div class="shortlist-header">
                <div>
                    <div class="shortlist-title">${getTaskTypeLabel(need.task_type)} - ${getDomainLabel(need.domain_area)}</div>
                    <div class="shortlist-meta">${need.id} | ${need.expert_count} expert${need.expert_count > 1 ? 's' : ''} needed | Round ${need.round_index}</div>
                </div>
                <span class="shortlist-badge">${need.shortlist.length} candidates</span>
            </div>
            <div class="candidate-list">
                ${need.shortlist.map(candidate => renderCandidateCard(candidate, need.id)).join('')}
            </div>
        </div>
    `).join('');
}

function renderCandidateCard(candidate, needId) {
    const isSelected = candidate.status === 'intro_sent' || candidate.status === 'selected';

    return `
        <div class="candidate-card ${isSelected ? 'selected' : ''}">
            <div class="candidate-header">
                <div class="candidate-avatar">${candidate.initials}</div>
                <div class="candidate-info">
                    <div class="candidate-name">${candidate.name}</div>
                    <div class="candidate-title">${candidate.title}</div>
                </div>
                <div class="candidate-match">${candidate.match_score}%</div>
            </div>
            <div class="candidate-body">
                <div class="candidate-tags">
                    ${candidate.domain_tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="candidate-summary">${candidate.summary}</div>
            </div>
            <div class="candidate-footer">
                <button class="btn btn-sm btn-secondary" onclick="viewCandidateDetail('${candidate.id}', '${needId}')">View Profile</button>
                ${!isSelected ? `<button class="btn btn-sm btn-primary" onclick="requestIntroductionFor('${candidate.id}', '${needId}')">Request Intro</button>` : `<span class="status-badge intro"><span class="status-dot"></span>Intro Requested</span>`}
            </div>
        </div>
    `;
}

function viewShortlist(needId) {
    showView('shortlists');
    // Could scroll to specific shortlist if needed
}

function viewCandidateDetail(candidateId, needId) {
    const need = needs.find(n => n.id === needId);
    const candidate = need?.shortlist?.find(c => c.id === candidateId);
    if (!candidate) return;

    currentCandidateId = candidateId;
    currentNeedId = needId;

    const modalBody = document.getElementById('candidate-modal-body');
    modalBody.innerHTML = `
        <div class="candidate-detail">
            <div class="candidate-header" style="margin-bottom: 20px;">
                <div class="candidate-avatar" style="width: 64px; height: 64px; font-size: 24px;">${candidate.initials}</div>
                <div class="candidate-info">
                    <div class="candidate-name" style="font-size: 18px;">${candidate.name}</div>
                    <div class="candidate-title">${candidate.title}</div>
                </div>
                <div class="candidate-match" style="font-size: 16px;">${candidate.match_score}% Match</div>
            </div>

            <div class="detail-grid" style="margin-bottom: 20px;">
                <div class="detail-item">
                    <span class="detail-label">English Level</span>
                    <span class="detail-value">${candidate.english_level}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Rate Range</span>
                    <span class="detail-value">${candidate.rate_range}</span>
                </div>
                <div class="detail-item">
                    <span class="detail-label">Availability</span>
                    <span class="detail-value">${candidate.availability}</span>
                </div>
            </div>

            <div style="margin-bottom: 16px;">
                <h4 style="font-size: 14px; margin-bottom: 8px;">Domain Expertise</h4>
                <div class="candidate-tags">
                    ${candidate.domain_tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>

            <div>
                <h4 style="font-size: 14px; margin-bottom: 8px;">Summary</h4>
                <p style="font-size: 14px; color: var(--text-secondary);">${candidate.summary}</p>
            </div>
        </div>
    `;

    // Update button visibility
    const introBtn = document.getElementById('request-intro-btn');
    if (candidate.status === 'intro_sent') {
        introBtn.textContent = 'Introduction Requested';
        introBtn.disabled = true;
        introBtn.classList.remove('btn-primary');
        introBtn.classList.add('btn-secondary');
    } else {
        introBtn.textContent = 'Request Introduction';
        introBtn.disabled = false;
        introBtn.classList.add('btn-primary');
        introBtn.classList.remove('btn-secondary');
    }

    openModal('candidate-modal');
}

// ==========================================
// INTRODUCTIONS & MEETINGS (C4)
// ==========================================

function requestIntroduction() {
    requestIntroductionFor(currentCandidateId, currentNeedId);
    closeModal('candidate-modal');
}

function requestIntroductionFor(candidateId, needId) {
    const need = needs.find(n => n.id === needId);
    if (!need) return;

    const candidate = need.shortlist?.find(c => c.id === candidateId);
    if (!candidate) return;

    // Update candidate status
    candidate.status = 'intro_sent';

    // Create match record
    if (!need.matches) need.matches = [];
    need.matches.push({
        expert_id: candidateId,
        expert_name: candidate.name,
        status: 'intro_sent',
        intro_sent_at: new Date().toISOString()
    });

    // Update need status
    need.status = 'intro';
    need.updated_at = new Date().toISOString();

    // Add activity
    activityLog.unshift({
        type: 'intro',
        icon: '🤝',
        text: `Introduction requested for ${candidate.name}`,
        time: 'Just now',
        needId: needId
    });

    showToast(`Introduction requested for ${candidate.name}`);
    renderShortlists();
    renderMeetings();
    renderDashboard();
}

function renderMeetings() {
    const container = document.getElementById('meetings-content');

    // Get all needs with matches
    const needsWithMatches = needs.filter(n => n.matches?.length > 0);

    let content = '';

    if (meetingsTabActive === 'pending-intro') {
        const pendingIntros = [];
        needsWithMatches.forEach(need => {
            need.matches.filter(m => m.status === 'intro_sent' || m.status === 'scheduling').forEach(match => {
                pendingIntros.push({ need, match });
            });
        });

        if (pendingIntros.length === 0) {
            content = `<div class="empty-state"><div class="empty-state-icon">🤝</div><div class="empty-state-title">No pending introductions</div></div>`;
        } else {
            content = pendingIntros.map(({ need, match }) => `
                <div class="meeting-card">
                    <div class="meeting-card-header">
                        <div class="meeting-info">
                            <h4>${match.expert_name}</h4>
                            <div class="meeting-need">${need.id} - ${getDomainLabel(need.domain_area)}</div>
                        </div>
                        <span class="status-badge ${match.status === 'scheduling' ? 'meeting' : 'intro'}">
                            <span class="status-dot"></span>
                            ${match.status === 'scheduling' ? 'Scheduling' : 'Awaiting Response'}
                        </span>
                    </div>
                    <div class="meeting-card-body">
                        <div class="meeting-detail">
                            <span class="meeting-detail-icon">📧</span>
                            <span>Intro sent ${formatTimeAgo(match.intro_sent_at)}</span>
                        </div>
                    </div>
                    <div class="meeting-card-footer">
                        <span class="text-muted">Expert will respond with available times</span>
                        <div>
                            <button class="btn btn-sm btn-outline" onclick="openReplacementModal('${need.id}', '${match.expert_id}')">Stop</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } else if (meetingsTabActive === 'scheduled') {
        const scheduledMeetings = [];
        needsWithMatches.forEach(need => {
            need.matches.filter(m => m.status === 'meeting_scheduled').forEach(match => {
                scheduledMeetings.push({ need, match });
            });
        });

        if (scheduledMeetings.length === 0) {
            content = `<div class="empty-state"><div class="empty-state-icon">📅</div><div class="empty-state-title">No scheduled meetings</div></div>`;
        } else {
            content = scheduledMeetings.map(({ need, match }) => `
                <div class="meeting-card">
                    <div class="meeting-card-header">
                        <div class="meeting-info">
                            <h4>${match.expert_name}</h4>
                            <div class="meeting-need">${need.id} - ${getDomainLabel(need.domain_area)}</div>
                        </div>
                        <span class="status-badge meeting">
                            <span class="status-dot"></span>
                            Meeting Scheduled
                        </span>
                    </div>
                    <div class="meeting-card-body">
                        <div class="meeting-detail">
                            <span class="meeting-detail-icon">📅</span>
                            <span>${formatDateTime(match.meeting_time)}</span>
                        </div>
                        <div class="meeting-detail">
                            <span class="meeting-detail-icon">🔗</span>
                            <span>Meeting link will be sent via email</span>
                        </div>
                    </div>
                    <div class="meeting-card-footer">
                        <span class="text-muted">Scheduled ${formatTimeAgo(match.meeting_scheduled_at)}</span>
                        <div>
                            <button class="btn btn-sm btn-secondary" onclick="requestReschedule('${need.id}', '${match.expert_id}')">Reschedule</button>
                            <button class="btn btn-sm btn-success" onclick="completeMeeting('${need.id}', '${match.expert_id}')">Mark Complete</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    } else if (meetingsTabActive === 'completed') {
        const completedMeetings = [];
        needsWithMatches.forEach(need => {
            need.matches.filter(m => m.status === 'meeting_done' || m.status === 'stopped').forEach(match => {
                completedMeetings.push({ need, match });
            });
        });

        if (completedMeetings.length === 0) {
            content = `<div class="empty-state"><div class="empty-state-icon">✅</div><div class="empty-state-title">No completed meetings yet</div></div>`;
        } else {
            content = completedMeetings.map(({ need, match }) => `
                <div class="meeting-card">
                    <div class="meeting-card-header">
                        <div class="meeting-info">
                            <h4>${match.expert_name}</h4>
                            <div class="meeting-need">${need.id} - ${getDomainLabel(need.domain_area)}</div>
                        </div>
                        <span class="status-badge ${match.status === 'stopped' ? 'failed' : 'success'}">
                            <span class="status-dot"></span>
                            ${match.status === 'stopped' ? 'Stopped' : 'Completed'}
                        </span>
                    </div>
                    <div class="meeting-card-body">
                        <div class="meeting-detail">
                            <span class="meeting-detail-icon">📅</span>
                            <span>${match.meeting_done_at ? formatDateTime(match.meeting_done_at) : 'N/A'}</span>
                        </div>
                        ${match.stop_reason ? `<div class="meeting-detail"><span class="meeting-detail-icon">📝</span><span>Reason: ${match.stop_reason}</span></div>` : ''}
                    </div>
                    <div class="meeting-card-footer">
                        <span class="text-muted">${match.outcome || ''}</span>
                        <div>
                            ${match.status !== 'stopped' ? `
                                <button class="btn btn-sm btn-success" onclick="startCooperation('${need.id}', '${match.expert_id}')">Start Cooperation</button>
                                <button class="btn btn-sm btn-outline" onclick="openReplacementModal('${need.id}', '${match.expert_id}')">Not a fit</button>
                            ` : ''}
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }

    container.innerHTML = content;
}

function completeMeeting(needId, expertId) {
    const need = needs.find(n => n.id === needId);
    if (!need) return;

    const match = need.matches?.find(m => m.expert_id === expertId);
    if (!match) return;

    match.status = 'meeting_done';
    match.meeting_done_at = new Date().toISOString();
    need.status = 'decision';
    need.updated_at = new Date().toISOString();

    activityLog.unshift({
        type: 'meeting',
        icon: '✅',
        text: `Meeting completed with ${match.expert_name}`,
        time: 'Just now',
        needId: needId
    });

    showToast('Meeting marked as complete');
    renderMeetings();
    renderDashboard();
}

function requestReschedule(needId, expertId) {
    showToast('Reschedule request sent to admin');
}

function startCooperation(needId, expertId) {
    const need = needs.find(n => n.id === needId);
    if (!need) return;

    const match = need.matches?.find(m => m.expert_id === expertId);
    if (!match) return;

    need.status = 'success';
    need.close_type = 'success';
    need.closed_at = new Date().toISOString();
    need.updated_at = new Date().toISOString();

    activityLog.unshift({
        type: 'success',
        icon: '🎉',
        text: `Cooperation started with ${match.expert_name}`,
        time: 'Just now',
        needId: needId
    });

    showToast('Congratulations! Cooperation has started.');
    renderMeetings();
    renderNeedsList();
    renderDashboard();
}

// ==========================================
// REPLACEMENT / STOP (C6)
// ==========================================

function openReplacementModal(needId, expertId) {
    currentNeedId = needId;
    currentMatchId = expertId;

    // Reset form
    document.getElementById('stop-reason').value = '';
    document.getElementById('stop-details').value = '';

    openModal('replacement-modal');
}

function confirmReplacement() {
    const reason = document.getElementById('stop-reason').value;
    const details = document.getElementById('stop-details').value;

    if (!reason) {
        showToast('Please select a reason');
        return;
    }

    const need = needs.find(n => n.id === currentNeedId);
    if (!need) return;

    const match = need.matches?.find(m => m.expert_id === currentMatchId);
    if (match) {
        match.status = 'stopped';
        match.stop_reason = reason;
        match.stop_details = details;
        match.stopped_at = new Date().toISOString();
    }

    // Increment round and go back to shortlisted
    need.round_index = (need.round_index || 1) + 1;
    need.status = 'shortlisted';
    need.updated_at = new Date().toISOString();

    activityLog.unshift({
        type: 'replacement',
        icon: '🔄',
        text: `Replacement requested for ${need.id} (Round ${need.round_index})`,
        time: 'Just now',
        needId: need.id
    });

    closeModal('replacement-modal');
    showToast('Replacement requested. Admin will provide new candidates.');
    renderMeetings();
    renderNeedsList();
    renderDashboard();
}

// ==========================================
// CLOSE NEED (C7)
// ==========================================

function openCloseModal(needId) {
    currentNeedId = needId;

    // Reset form
    document.getElementById('close-type').value = '';
    document.getElementById('fail-reason').value = '';
    document.getElementById('close-notes').value = '';
    document.getElementById('fail-reason-section').classList.add('hidden');

    openModal('close-modal');
}

function confirmCloseNeed() {
    const closeType = document.getElementById('close-type').value;
    const failReason = document.getElementById('fail-reason').value;
    const notes = document.getElementById('close-notes').value;

    if (!closeType) {
        showToast('Please select a close type');
        return;
    }

    const need = needs.find(n => n.id === currentNeedId);
    if (!need) return;

    need.status = closeType === 'success' ? 'success' : (closeType === 'fail' ? 'failed' : 'paused');
    need.close_type = closeType;
    need.fail_reason = failReason;
    need.close_notes = notes;
    need.closed_at = new Date().toISOString();
    need.updated_at = new Date().toISOString();

    const statusLabel = closeType === 'success' ? 'completed successfully' : (closeType === 'fail' ? 'closed as failed' : 'paused');

    activityLog.unshift({
        type: closeType === 'success' ? 'success' : 'closed',
        icon: closeType === 'success' ? '✅' : (closeType === 'fail' ? '❌' : '⏸️'),
        text: `Need ${need.id} ${statusLabel}`,
        time: 'Just now',
        needId: need.id
    });

    closeModal('close-modal');
    showToast(`Need ${statusLabel}`);
    renderNeedsList();
    renderDashboard();
}

// ==========================================
// NEED DETAIL VIEW
// ==========================================

function viewNeedDetail(needId) {
    const need = needs.find(n => n.id === needId);
    if (!need) return;

    currentNeedId = needId;

    document.getElementById('modal-need-title').textContent = `${need.id} - ${getTaskTypeLabel(need.task_type)}`;

    const modalBody = document.getElementById('modal-need-body');
    modalBody.innerHTML = `
        <div class="need-detail">
            <div class="need-detail-section">
                <h4>Status</h4>
                <div style="display: flex; align-items: center; gap: 16px;">
                    <span class="status-badge ${need.status}">
                        <span class="status-dot"></span>
                        ${STATUS_FLOW[need.status]?.label || need.status}
                    </span>
                    ${need.round_index > 1 ? `<span class="round-badge">Round ${need.round_index}</span>` : ''}
                </div>
            </div>

            <div class="need-detail-section">
                <h4>Basic Information</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Domain</span>
                        <span class="detail-value">${getDomainLabel(need.domain_area)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Task Type</span>
                        <span class="detail-value">${getTaskTypeLabel(need.task_type)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Experts Needed</span>
                        <span class="detail-value">${need.expert_count}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Language</span>
                        <span class="detail-value">${getLanguageLabel(need.language_requirement)}</span>
                    </div>
                </div>
            </div>

            <div class="need-detail-section">
                <h4>Description</h4>
                <p style="font-size: 14px; color: var(--text-secondary);">${need.task_description}</p>
            </div>

            <div class="need-detail-section">
                <h4>Timeline & Budget</h4>
                <div class="detail-grid">
                    <div class="detail-item">
                        <span class="detail-label">Hours/Week</span>
                        <span class="detail-value">${need.intensity_hours_per_week}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Duration</span>
                        <span class="detail-value">${getDurationLabel(need.duration)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Start Date</span>
                        <span class="detail-value">${formatDate(need.start_date)}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Budget Range</span>
                        <span class="detail-value">$${need.budget_range}/hr</span>
                    </div>
                </div>
            </div>

            ${need.must_have ? `
            <div class="need-detail-section">
                <h4>Requirements</h4>
                <div class="detail-item" style="margin-bottom: 12px;">
                    <span class="detail-label">Must Have</span>
                    <span class="detail-value">${need.must_have}</span>
                </div>
                ${need.nice_to_have ? `
                <div class="detail-item">
                    <span class="detail-label">Nice to Have</span>
                    <span class="detail-value">${need.nice_to_have}</span>
                </div>
                ` : ''}
            </div>
            ` : ''}

            <div class="need-detail-section">
                <h4>Timeline</h4>
                <div class="status-timeline">
                    ${renderTimeline(need)}
                </div>
            </div>
        </div>
    `;

    openModal('need-detail-modal');
}

function renderTimeline(need) {
    const stages = [
        { key: 'submitted', label: 'Submitted', date: need.created_at },
        { key: 'discovery', label: 'Discovery', date: need.status !== 'submitted' ? need.updated_at : null },
        { key: 'shortlisted', label: 'Shortlisted', date: ['shortlisted', 'intro', 'meeting', 'decision', 'success'].includes(need.status) ? need.updated_at : null },
        { key: 'intro', label: 'Introduction', date: ['intro', 'meeting', 'decision', 'success'].includes(need.status) ? need.updated_at : null },
        { key: 'meeting', label: 'Meeting', date: ['meeting', 'decision', 'success'].includes(need.status) ? need.updated_at : null },
        { key: 'success', label: 'Success', date: need.status === 'success' ? need.closed_at : null }
    ];

    const currentIndex = stages.findIndex(s => s.key === need.status);

    return stages.map((stage, index) => {
        const isCompleted = index < currentIndex;
        const isCurrent = index === currentIndex;

        return `
            <div class="timeline-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}">
                <div class="timeline-dot">${isCompleted ? '✓' : (isCurrent ? '●' : '')}</div>
                <div class="timeline-content">
                    <div class="timeline-title">${stage.label}</div>
                    <div class="timeline-date">${stage.date ? formatTimeAgo(stage.date) : 'Pending'}</div>
                </div>
            </div>
        `;
    }).join('');
}

function viewNeed(needId) {
    viewNeedDetail(needId);
}

// ==========================================
// MODAL HELPERS
// ==========================================

function openModal(modalId) {
    document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
    document.getElementById(modalId).classList.remove('active');
}

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

function showToast(message) {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    toastMessage.textContent = message;
    toast.classList.remove('hidden');

    setTimeout(() => {
        toast.classList.add('hidden');
    }, 3000);
}

// ==========================================
// UTILITY FUNCTIONS
// ==========================================

function getDomainLabel(domain) {
    const labels = {
        'legal': 'Legal',
        'finance': 'Finance',
        'medical': 'Medical/Healthcare',
        'engineering': 'Engineering',
        'education': 'Education',
        'operations': 'Operations',
        'ai-ml': 'AI/Machine Learning',
        'cybersecurity': 'Cybersecurity',
        'data-science': 'Data Science',
        'other': 'Other'
    };
    return labels[domain] || domain;
}

function getTaskTypeLabel(taskType) {
    const labels = {
        'review': 'Data Review',
        'consulting': 'Expert Consulting',
        'writing': 'Content Writing',
        'redteam': 'Red Team Testing',
        'evaluation': 'Model Evaluation',
        'training': 'Training Data',
        'other': 'Other'
    };
    return labels[taskType] || taskType;
}

function getLanguageLabel(lang) {
    const labels = {
        'english-native': 'English (Native)',
        'english-fluent': 'English (Fluent)',
        'chinese-native': 'Chinese (Native)',
        'chinese-fluent': 'Chinese (Fluent)',
        'bilingual': 'Bilingual',
        'other': 'Other'
    };
    return labels[lang] || lang;
}

function getDurationLabel(duration) {
    const labels = {
        '1-week': '< 1 week',
        '1-2-weeks': '1-2 weeks',
        '2-4-weeks': '2-4 weeks',
        '1-3-months': '1-3 months',
        '3-6-months': '3-6 months',
        '6+-months': '6+ months',
        'ongoing': 'Ongoing'
    };
    return labels[duration] || duration;
}

function formatTimeAgo(dateStr) {
    if (!dateStr) return 'N/A';

    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;

    return formatDate(dateStr);
}

function formatDate(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateTime(dateStr) {
    if (!dateStr) return 'N/A';
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit'
    });
}
