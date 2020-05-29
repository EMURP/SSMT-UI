
import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { SelectableTable } from '@app/myTable/SelectableTable';
import { DashboardTable } from '@app/myTable/DashboardTable/DashboardTable';

// export const data = [
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'alertmanager-main-0',
//     pod_usage_cpu_core_seconds: 73.01483999999998
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'alertmanager-main-1',
//     pod_usage_cpu_core_seconds: 69.23531999999997
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'alertmanager-main-2',
//     pod_usage_cpu_core_seconds: 69.56118
//   },
//   {
//     namespace: 'openshift-apiserver',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'apiserver-hn6jl',
//     pod_usage_cpu_core_seconds: 81.43661999999999
//   },
//   {
//     namespace: 'openshift-apiserver',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'apiserver-sjbl7',
//     pod_usage_cpu_core_seconds: 178.35912000000002
//   },
//   {
//     namespace: 'openshift-service-ca',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'apiservice-cabundle-injector-d84c98485-v787m',
//     pod_usage_cpu_core_seconds: 19.397519999999993
//   },
//   {
//     namespace: 'openshift-authentication-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'authentication-operator-57d4974d5d-mwdkl',
//     pod_usage_cpu_core_seconds: 59.17080000000001
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'catalog-operator-5d644f7b4b-zfhb6',
//     pod_usage_cpu_core_seconds: 85.14275999999997
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-64d86d694d-d5s69',
//     pod_usage_cpu_core_seconds: 25.7109
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-66b6fc689f-489bm',
//     pod_usage_cpu_core_seconds: 29.839620000000004
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-66f7cd788b-6h7hx',
//     pod_usage_cpu_core_seconds: 26.32464
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-6b45f94966-s7gx9',
//     pod_usage_cpu_core_seconds: 56.71950000000001
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-7bd4b66c87-7rh7k',
//     pod_usage_cpu_core_seconds: 18.03252
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'certified-operators-d484685cd-ws5vn',
//     pod_usage_cpu_core_seconds: 28.810139999999997
//   },
//   {
//     namespace: 'openshift-image-registry',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'cluster-image-registry-operator-f9697f69d-44484',
//     pod_usage_cpu_core_seconds: 82.15529999999998
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'cluster-monitoring-operator-7bbc9f9895-9lx2n',
//     pod_usage_cpu_core_seconds: 494.79420000000016
//   },
//   {
//     namespace: 'openshift-cluster-node-tuning-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'cluster-node-tuning-operator-6986d4dff4-cn54n',
//     pod_usage_cpu_core_seconds: 9.486779999999998
//   },
//   {
//     namespace: 'openshift-cluster-samples-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'cluster-samples-operator-889fb7599-zjblq',
//     pod_usage_cpu_core_seconds: 41.96723999999999
//   },
//   {
//     namespace: 'openshift-cluster-storage-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'cluster-storage-operator-5dc75b588c-mh9w6',
//     pod_usage_cpu_core_seconds: 76.69980000000001
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'community-operators-64d4d4dbfc-hhvcp',
//     pod_usage_cpu_core_seconds: 67.20485999999998
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'community-operators-8445dd9dfb-qk2mw',
//     pod_usage_cpu_core_seconds: 68.51082000000002
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'community-operators-8c67bbd6c-zbbcp',
//     pod_usage_cpu_core_seconds: 25.8174
//   },
//   {
//     namespace: 'openshift-service-ca',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'configmap-cabundle-injector-6cc5ccdd7f-tcl4m',
//     pod_usage_cpu_core_seconds: 34.142399999999995
//   },
//   {
//     namespace: 'openshift-console',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'console-8c7b46fb4-68x4w',
//     pod_usage_cpu_core_seconds: 32.67378000000001
//   },
//   {
//     namespace: 'openshift-console-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'console-operator-57f5bcc578-b59hx',
//     pod_usage_cpu_core_seconds: 73.69403999999999
//   },
//   {
//     namespace: 'openshift-controller-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'controller-manager-rnw4t',
//     pod_usage_cpu_core_seconds: 145.01045999999997
//   },
//   {
//     namespace: 'openshift-dns',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'dns-default-s4r76',
//     pod_usage_cpu_core_seconds: 97.14569999999998
//   },
//   {
//     namespace: 'openshift-dns-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'dns-operator-7785d9f869-nqmh8',
//     pod_usage_cpu_core_seconds: 14.471700000000002
//   },
//   {
//     namespace: 'openshift-etcd',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'etcd-member-crc-w6th5-master-0',
//     pod_usage_cpu_core_seconds: 1510.5283800000002
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'grafana-7847db887-tm8pg',
//     pod_usage_cpu_core_seconds: 76.19213999999998
//   },
//   {
//     namespace: 'openshift-metering',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'hive-metastore-0',
//     pod_usage_cpu_core_seconds: 819.8557799999999
//   },
//   {
//     namespace: 'openshift-metering',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'hive-server-0',
//     pod_usage_cpu_core_seconds: 161.37528000000006
//   },
//   {
//     namespace: 'openshift-image-registry',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'image-registry-864894cbd5-8n5ff',
//     pod_usage_cpu_core_seconds: 42.62202000000001
//   },
//   {
//     namespace: 'openshift-ingress-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'ingress-operator-556dd68cb9-gfbwf',
//     pod_usage_cpu_core_seconds: 30.08057999999999
//   },
//   {
//     namespace: 'openshift-kube-apiserver',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'kube-apiserver-crc-w6th5-master-0',
//     pod_usage_cpu_core_seconds: 3944.78118
//   },
//   {
//     namespace: 'openshift-kube-apiserver-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'kube-apiserver-operator-566b9798-fzvtd',
//     pod_usage_cpu_core_seconds: 232.11965999999998
//   },
//   {
//     namespace: 'openshift-kube-controller-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'kube-controller-manager-crc-w6th5-master-0',
//     pod_usage_cpu_core_seconds: 544.5969
//   },
//   {
//     namespace: 'openshift-kube-controller-manager-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'kube-controller-manager-operator-7c8b7465b-4mbkc',
//     pod_usage_cpu_core_seconds: 273.95418
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'kube-state-metrics-777f6bf798-tcmwq',
//     pod_usage_cpu_core_seconds: 31.46124
//   },
//   {
//     namespace: 'openshift-cluster-machine-approver',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'machine-approver-57dd49d7c5-mvdz2',
//     pod_usage_cpu_core_seconds: 13.79904
//   },
//   {
//     namespace: 'openshift-machine-config-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'machine-config-daemon-xtdmj',
//     pod_usage_cpu_core_seconds: 32.03652
//   },
//   {
//     namespace: 'openshift-machine-config-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'machine-config-server-pv6nm',
//     pod_usage_cpu_core_seconds: 0.5458799999999998
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'marketplace-operator-7fbcb88798-wxcdc',
//     pod_usage_cpu_core_seconds: 146.09628
//   },
//   {
//     namespace: 'openshift-metering',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'metering-operator-86b95669bb-njp4q',
//     pod_usage_cpu_core_seconds: 8202.55536
//   },
//   {
//     namespace: 'openshift-multus',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'multus-admission-controller-z6sx4',
//     pod_usage_cpu_core_seconds: 15.509580000000001
//   },
//   {
//     namespace: 'openshift-multus',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'multus-vbjms',
//     pod_usage_cpu_core_seconds: 31.49382
//   },
//   {
//     namespace: 'openshift-network-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'network-operator-5c7c7dc988-dt8qx',
//     pod_usage_cpu_core_seconds: 61.91549999999997
//   },
//   {
//     namespace: 'openshift-image-registry',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'node-ca-kp85n',
//     pod_usage_cpu_core_seconds: 8.445659999999998
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'node-exporter-hffz9',
//     pod_usage_cpu_core_seconds: 160.92192
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-5756ff8648-4f89x',
//     pod_usage_cpu_core_seconds: 0.11868000000000001
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-5756ff8648-dv29g',
//     pod_usage_cpu_core_seconds: 0.68424
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-594975d4c5-h6fw4',
//     pod_usage_cpu_core_seconds: 0.10266
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-594975d4c5-mdsfz',
//     pod_usage_cpu_core_seconds: 1.24188
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-77569bfc5f-hzcjv',
//     pod_usage_cpu_core_seconds: 13.624500000000003
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-77569bfc5f-kdn58',
//     pod_usage_cpu_core_seconds: 16.11228
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-798f7b544-5lxnp',
//     pod_usage_cpu_core_seconds: 8.05176
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-798f7b544-tq9d5',
//     pod_usage_cpu_core_seconds: 8.959139999999998
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-7f977d55c9-9z6f6',
//     pod_usage_cpu_core_seconds: 3.82848
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-7f977d55c9-vxzbw',
//     pod_usage_cpu_core_seconds: 3.4880999999999998
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-8cb84ccdc-qk7wx',
//     pod_usage_cpu_core_seconds: 10.301339999999998
//   },
//   {
//     namespace: 'openshift-authentication',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'oauth-openshift-8cb84ccdc-qt5s6',
//     pod_usage_cpu_core_seconds: 10.715760000000001
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'olm-operator-6d454db9dd-4sz4q',
//     pod_usage_cpu_core_seconds: 212.21117999999993
//   },
//   {
//     namespace: 'openshift-apiserver-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-apiserver-operator-7cc77d965f-4mcgm',
//     pod_usage_cpu_core_seconds: 77.46144000000001
//   },
//   {
//     namespace: 'openshift-controller-manager-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-controller-manager-operator-68dcf95c47-bxbln',
//     pod_usage_cpu_core_seconds: 69.32154000000003
//   },
//   {
//     namespace: 'openshift-kube-scheduler',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-kube-scheduler-crc-w6th5-master-0',
//     pod_usage_cpu_core_seconds: 105.64649999999999
//   },
//   {
//     namespace: 'openshift-kube-scheduler-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-kube-scheduler-operator-557777c86b-zxqx7',
//     pod_usage_cpu_core_seconds: 289.40862
//   },
//   {
//     namespace: 'openshift-service-catalog-apiserver-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-service-catalog-apiserver-operator-6cddfd76cc-pmzmw',
//     pod_usage_cpu_core_seconds: 35.85216
//   },
//   {
//     namespace: 'openshift-service-catalog-controller-manager-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-service-catalog-controller-manager-operator-5886hlmm2',
//     pod_usage_cpu_core_seconds: 28.316519999999993
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'openshift-state-metrics-b6755756-4tj6j',
//     pod_usage_cpu_core_seconds: 7.80156
//   },
//   {
//     namespace: 'openshift-sdn',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'ovs-m586r',
//     pod_usage_cpu_core_seconds: 729.0261
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-59b74dc88d-8t4tr',
//     pod_usage_cpu_core_seconds: 13.360739999999998
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-59b74dc88d-lkk4h',
//     pod_usage_cpu_core_seconds: 14.643539999999998
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-6587f8c6f4-7hv2j',
//     pod_usage_cpu_core_seconds: 3.86988
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-6587f8c6f4-tgdt5',
//     pod_usage_cpu_core_seconds: 2.83908
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-6dfff999f5-js45x',
//     pod_usage_cpu_core_seconds: 7.533779999999999
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-6dfff999f5-ztnt6',
//     pod_usage_cpu_core_seconds: 7.092180000000001
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-967f4c8b-jhptq',
//     pod_usage_cpu_core_seconds: 9.952380000000002
//   },
//   {
//     namespace: 'openshift-operator-lifecycle-manager',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'packageserver-967f4c8b-xpw7f',
//     pod_usage_cpu_core_seconds: 12.29448
//   },
//   {
//     namespace: 'openshift-metering',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'presto-coordinator-0',
//     pod_usage_cpu_core_seconds: 2967.827340000001
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'prometheus-adapter-5cb5598dd-kr4rb',
//     pod_usage_cpu_core_seconds: 14.947020000000002
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'prometheus-adapter-5cb5598dd-m8b75',
//     pod_usage_cpu_core_seconds: 14.679540000000005
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'prometheus-k8s-0',
//     pod_usage_cpu_core_seconds: 1443.85992
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'prometheus-k8s-1',
//     pod_usage_cpu_core_seconds: 1454.8356
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'prometheus-operator-69cfb94b75-4jf47',
//     pod_usage_cpu_core_seconds: 40.27752
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'redhat-operators-65d677978f-rbbmr',
//     pod_usage_cpu_core_seconds: 24.6381
//   },
//   {
//     namespace: 'openshift-marketplace',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'redhat-operators-98645ff84-lgvmm',
//     pod_usage_cpu_core_seconds: 47.63832000000001
//   },
//   {
//     namespace: 'openshift-metering',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'reporting-operator-978687d9c-vkzrl',
//     pod_usage_cpu_core_seconds: 135.82302
//   },
//   {
//     namespace: 'openshift-ingress',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'router-default-77c77568f4-npdrs',
//     pod_usage_cpu_core_seconds: 63.416039999999995
//   },
//   {
//     namespace: 'openshift-sdn',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'sdn-controller-7s5hg',
//     pod_usage_cpu_core_seconds: 6.86454
//   },
//   {
//     namespace: 'openshift-sdn',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'sdn-twbd8',
//     pod_usage_cpu_core_seconds: 447.4517399999999
//   },
//   {
//     namespace: 'openshift-service-ca-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'service-ca-operator-595657f77-rbmjs',
//     pod_usage_cpu_core_seconds: 31.453199999999995
//   },
//   {
//     namespace: 'openshift-service-ca',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'service-serving-cert-signer-d59b877-thvch',
//     pod_usage_cpu_core_seconds: 24.894599999999997
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'telemeter-client-65dcb4d787-m5bdc',
//     pod_usage_cpu_core_seconds: 8.97984
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'thanos-querier-5856664597-ksb5c',
//     pod_usage_cpu_core_seconds: 76.88237999999998
//   },
//   {
//     namespace: 'openshift-monitoring',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'thanos-querier-5856664597-nmx9r',
//     pod_usage_cpu_core_seconds: 75.73649999999998
//   },
//   {
//     namespace: 'openshift-cluster-node-tuning-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'tuned-v9hqm',
//     pod_usage_cpu_core_seconds: 2.93766
//   },
//   {
//     namespace: 'openshift-cluster-node-tuning-operator',
//     node: 'crc-w6th5-master-0',
//     period_end: '2020-05-30T23:59:59Z',
//     period_start: '2020-05-20T00:09:00Z',
//     pod: 'tuned-ztk86',
//     pod_usage_cpu_core_seconds: 7.2924599999999975
//   }
// ];

type myProps = {
  startDate: Date;
  endDate: Date;
};
type myState = {
    isLoaded: boolean;
    clusterData: Array<dataObject>;
};

type dataObject = {

    namespace: string;
    node: string;
    pod: string;
    podUsageCpuCoreSeconds: string;
    periodEnd: Date;
    periodStart: Date;


}


// To convert the date from the string format TODO:Fix 
const parseISOString = (s: string) => {
  const b: Array<string> = s.split(/\D+/);
  return new Date(
    Date.UTC(
      Number.parseInt(b[0]),
      Number.parseInt(b[1]),
      Number.parseInt(b[2]),
      Number.parseInt(b[3]),
      Number.parseInt(b[4]),
      Number.parseInt(b[5])
    )
  );
};

class Fetchdata extends React.Component<myProps,myState> {
  constructor(myProps) {
    super(myProps);

       this.state={
         isLoaded: false,
         clusterData: []
       };
  }

  componentDidMount(){
    const apiUrl =
    "https://3903aa74-2b7e-4ea9-85f1-04f11f67a2ad.mock.pstmn.io/list_project/2020-05-15/2020-05-28";

   axios.get(apiUrl).then(res => {
    const tableData: Array<dataObject> = [];
    res.data.forEach(clusterInfo => {
        tableData.push({
          namespace: clusterInfo['namespace'],
          node: clusterInfo['node'],
          periodEnd: parseISOString(clusterInfo['period_end']),
          periodStart: parseISOString(clusterInfo['period_start']),
          pod: clusterInfo['pod'],
          podUsageCpuCoreSeconds: clusterInfo['pod_usage_cpu_core_seconds']
        });
      });

     this.setState({...this.state, isLoaded:true, clusterData: tableData})
  }).catch( err => {
    this.setState( {...this.state, isLoaded:false},()=>console.log(err));
  })
  }

  renderTable = () => {
      
    const columnTitle = {
      namespace: 'Namespace',
      node: 'Node',
      periodEnd: 'Period End',
      periodStart: 'Period Start',
      pod: 'Pod',
      podUsageCpuCoreSeconds: 'pod_usage_cpu_core_seconds'
    };

    

    return (
      <div>
        {this.state.clusterData.length !== 0 && (
          <DashboardTable
            startDate={this.props.startDate}
            endDate={this.props.endDate}
            columnTitle={columnTitle}
            tableData={this.state.clusterData}
          />
        )}
      </div>
    );
  };

  render() {
    return(this.state.isLoaded &&  this.renderTable());
  }
}

export { Fetchdata };
